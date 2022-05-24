const mat4 = glMatrix.mat4
const vec4 = glMatrix.vec4;

var indexOfRefraction = 1.0;

var res = [1280, 720];

var boxRotation = 45.0;
var isDemoRunning = true;
var axis = [0.75, 1, 0.25];
var objColor = vec4.create;
var wireColor = vec4.create;
window.onload = main;

function main() {
    const canvas = document.querySelector("#demoCanvas");
    //const tex = await loadTexture("Resources/SiteDemo/Background.png");

    //init WebGL context
    const gl = canvas.getContext("webgl");

    if (gl == null) {
        alert("WebGL Initialization Failed. WebGL may be unsupported by this browser.");
        return;
    }

    //Create Vertex and Pixel shaders
    //OpenGL uses a different format to D3D, so instead of worldviewproj it's projviewworld
    const vs = `
        attribute vec4 aVertPos;
        attribute vec3 aVertNorm;

        uniform mat4 uWorldMatrix;
        uniform mat4 uViewMatrix;
        uniform mat4 uProjMatrix;
        
        varying vec3 iDir;
        varying vec3 wNormal;

        void main(){
            vec3 iPos = vec3(0.0, 0.0, -2.5);
            vec4 worldPos = uWorldMatrix * aVertPos;
            iDir = normalize(worldPos.xyz - vec3(0, 0, -2.5));

            wNormal = normalize(uViewMatrix * vec4(aVertNorm, 0.0)).xyz;

            gl_Position = uProjMatrix * uViewMatrix * uWorldMatrix * aVertPos;

        }
    `

    //OpenGL refers to this as a fragment shader
    const ps = `
        precision mediump float;
        uniform vec4 uColor;
        uniform vec2 uResolution;

        uniform sampler2D background;
        uniform sampler2D foreground;

        varying vec3 iDir;
        varying vec3 wNormal;


        void main(){

            float ior = 0.8;
            vec2 uv = gl_FragCoord.xy / uResolution; 
            vec3 refracted = refract(iDir, wNormal, 1.0/ior);

            uv += refracted.xy;

            vec4 tex = texture2D(background, uv);
            vec4 fg = texture2D(foreground, uv);

            float f = pow( 1.0 + dot( iDir, wNormal), 3.0 );

            gl_FragColor = vec4(mix(tex.rgb, tex.gbr, f).rgb, f);

        }

    `

    //Init shader program with our Vertex and Pixel shaders
    const shaderProgram = InitShaderProgram(gl, vs, ps);

    const programInfo = { //'Locations' are functionally the same as Constant Buffers
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertPos'),
            vertexNormal: gl.getAttribLocation(shaderProgram, 'aVertNorm')
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjMatrix'),
            viewMatrix: gl.getUniformLocation(shaderProgram, 'uViewMatrix'),
            worldMatrix: gl.getUniformLocation(shaderProgram, 'uWorldMatrix'),
            color: gl.getUniformLocation(shaderProgram, 'uColor'),
            resolution: gl.getUniformLocation(shaderProgram, 'uResolution'),
        },
    };


    //Initialize Scene Objects
    const buffers = InitGeoBuffers(gl);

    
        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,  new Uint8Array([255, 0, 255, 255]));

        //Load an image 
        var image = new Image();
        image.src = "Resources/SiteDemo/Background.png";
        image.addEventListener('load', function() {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,gl.UNSIGNED_BYTE, image);
        gl.generateMipmap(gl.TEXTURE_2D);
        });
    

    
        /*
        var texture2 = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture2);

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,  new Uint8Array([255, 0, 255, 255]));

        //Load an image 
        var image2 = new Image();
        image2.src = "Resources/SiteDemo/Foreground.png";
        image2.addEventListener('load', function() {
        gl.bindTexture(gl.TEXTURE_2D, texture2);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,gl.UNSIGNED_BYTE, image2);
        gl.generateMipmap(gl.TEXTURE_2D);
        });
    
        var bgLoc = gl.getUniformLocation(program, "background");
        var fgLoc = gl.getUniformLocation(program, "foreground");

        gl.uniform1i(bgLoc, 0); 
        gl.uniform1i(fgLoc, 1); 

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, texture2);
        */
        

    //handle canvas resizing

    window.addEventListener('resize', ResizeCanvas, false);

    function ResizeCanvas() {
        //Redraw on canvas resize
        Draw(gl, programInfo, buffers, 0);
    }

    //Draw the scene
    Draw(gl, programInfo, buffers, 0);

    var then = 0;

    function render(now) {
        now *= 0.001;
        const deltaTime = now - then;
        then = now;

        Draw(gl, programInfo, buffers, deltaTime);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

}


function InitShaderProgram(gl, vsSource, psSource) {
    //load our shaders into memory
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const pixelShader = loadShader(gl, gl.FRAGMENT_SHADER, psSource);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, pixelShader);
    gl.linkProgram(shaderProgram);


    //throw an alert if shader program creation failed
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize Shader Program. :' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}

function loadShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    //assert whether compiling shader was successful
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('Error: Shader Compilation Failed: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

function InitGeoBuffers(gl) {
    //Create a Vertex buffer
    const vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);

    //Simple Cube - anticlockwise winding order
    const cube = [ 
        /*
        // Front face
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,
        -1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 

        // Back Face
        1.0, 1.0, -1.0,
        -1.0, 1.0, -1.0,
        1.0, -1.0, -1.0,
        -1.0, -1.0, -1.0,

        // Top Face
        -1.0, 1.0, -1.0,
        -1.0, 1.0, 1.0,
        1.0, 1.0, 1.0,
        1.0, 1.0, -1.0,

        // Bottom Face
        1.0, -1.0, 1.0,
        1.0, -1.0, -1.0,
        -1.0, -1.0, -1.0,
        -1.0, -1.0, 1.0,

        // Right Face
        1.0, -1.0, -1.0,
        1.0, -1.0, 1.0, 
        1.0, 1.0, -1.0, 
        1.0, 1.0, 1.0,

        // Left Face
        -1.0, 1.0, 1,0,
        -1.0, 1.0, -1.0,
        -1.0, -1.0, 1.0,
        -1.0, -1.0, -1.0,
*/

// Front face 
-1.0, -1.0, 1.0, 
1.0, -1.0, 1.0, 
1.0, 1.0, 1.0,  
-1.0, 1.0, 1.0, 

// Back face 
-1.0, -1.0, -1.0,  
-1.0, 1.0, -1.0, 
1.0, 1.0, -1.0, 
1.0, -1.0, -1.0, 

// Top face 
-1.0, 1.0, -1.0,  
-1.0, 1.0, 1.0, 
1.0, 1.0, 1.0, 
1.0, 1.0, -1.0, 

// Bottom face 
-1.0, -1.0, -1.0, 
1.0, -1.0, -1.0, 
1.0, -1.0, 1.0,  
-1.0, -1.0, 1.0, 

// Right face 
1.0, -1.0, -1.0, 
1.0, 1.0, -1.0, 
1.0, 1.0, 1.0, 
1.0, -1.0, 1.0, 

// Left face 
-1.0, -1.0, -1.0,  
-1.0, -1.0, 1.0,  
-1.0, 1.0, 1.0,  
-1.0, 1.0, -1.0, 
        
    ];

    //pass on position data to WebGL
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cube), gl.STATIC_DRAW);

    const nBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, nBuffer);

    const cubeNormals = [
        // Front face
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,

        // Back face
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        
        //Top Face
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,

        //Bottom Face
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,

        //Right Face
        1.0, 0,0, 0.0,
        1.0, 0,0, 0.0,
        1.0, 0,0, 0.0,
        1.0, 0,0, 0.0,

        //Left Face
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0,
        
    ]

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeNormals), gl.STATIC_DRAW);

    return {
        position: vBuffer,
        normal: nBuffer,
    };
}

function Draw(gl, programInfo, buffers, deltaTime) {
    objColor = (0.0, 0.0, 1.0, 1.0);
    wireColor = (1.0, 1.0, 1.0, 1.0);

    //Clear
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


    //Perspective Matrix (FoV LH)
    const FoV = 90 * Math.PI / 180; //Field of View in Radians
    const aspectRatio = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const nearPlane = 0.1;
    const farPlane = 100.0;
    const mProjMatrix = mat4.create();
    const mWorldMatrix = mat4.create();
    //mObjColor = [1, 0, 0, 1];

    mat4.perspective(mProjMatrix, FoV, aspectRatio, nearPlane, farPlane);

    //TODO: World Matrix implementation
    //Draw to scene 0, translate back so the whole model is in view
    const mViewMatrix = mat4.create();
    mat4.translate(mViewMatrix, mViewMatrix, [0.0, 0.0, -2.5]);

    //Rotation - W = TRS 
    mat4.rotate(mWorldMatrix, mWorldMatrix, boxRotation / Math.PI * 180, axis);

    if (isDemoRunning) {
        axis = [Math.sin(boxRotation), 1 , Math.cos(boxRotation)]
        boxRotation += (Math.PI / 180) *deltaTime;
    }

    { //Scope this
        //WebGL struct packing
        const numComponents = 3; //XYZ
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;

        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset);
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
        gl.vertexAttribPointer(programInfo.attribLocations.vertexNormal, numComponents, type, normalize, stride, offset);
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexNormal);
        

        //set the program in WebGL
        gl.useProgram(programInfo.program);

        //set constant buffers
        gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, mProjMatrix);
        gl.uniformMatrix4fv(programInfo.uniformLocations.viewMatrix, false, mViewMatrix);
        gl.uniformMatrix4fv(programInfo.uniformLocations.worldMatrix, false, mWorldMatrix);
        gl.uniform2fv(programInfo.uniformLocations.resolution, res );
        //gl.uniform4fv(programInfo.uniformLocations.color, false, mObjColor);
        //gl.uniform1fv(programInfo.uniformLocations.ior, false, indexOfRefraction);
    }

    const offset = 0;
    const vertCount = 24;
    //gl.uniform4fv(programInfo.uniformLocations.color, false, [1, 0, 0, 1]);
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertCount);    //Draw the solid model
    //gl.uniform4f(programInfo.uniformLocations.color, false, [1, 1, 1, 1]);
    //gl.drawArrays(gl.LINE_STRIP, offset, vertCount);    //Draw the wireframe model


}

function RunDemo() {
    console.log("Run Demo Button Clicked");
    isDemoRunning = true;
}