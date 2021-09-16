const mat4 = glMatrix.mat4
window.onload = main;

function main() {
    const canvas = document.querySelector("#demoCanvas");

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

        uniform mat4 uViewMatrix;
        uniform mat4 uProjMatrix;

        void main(){
            gl_Position = uProjMatrix * uViewMatrix * aVertPos;
        }
    `

    //OpenGL refers to this as a fragment shader
    const ps = `
        void main(){
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }

    `

    //Init shader program with our Vertex and Pixel shaders
    const shaderProgram = InitShaderProgram(gl, vs, ps);

    const programInfo = { //'Locations' are functionally the same as Constant Buffers
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertPos'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjMatrix'),
            viewMatrix: gl.getUniformLocation(shaderProgram, 'uViewMatrix'),
        },
    };


    //Initialize Scene Objects
    const buffers = InitGeoBuffers(gl);

    //handle canvas resizing

    window.addEventListener('resize', ResizeCanvas, false);

    function ResizeCanvas() {
        //Redraw on canvas resize
        Draw(gl, programInfo, buffers);
    }

    //Draw the scene
    Draw(gl, programInfo, buffers);

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
    const cube = [ //Yoinked from the internet, because typing this is a pain.
        // Front face
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,
        1.0, 1.0, 1.0, -1.0, 1.0, 1.0,

        // Back face
        -1.0, -1.0, -1.0, -1.0, 1.0, -1.0,
        1.0, 1.0, -1.0,
        1.0, -1.0, -1.0,

        // Top face
        -1.0, 1.0, -1.0, -1.0, 1.0, 1.0,
        1.0, 1.0, 1.0,
        1.0, 1.0, -1.0,

        // Bottom face
        -1.0, -1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, -1.0, 1.0, -1.0, -1.0, 1.0,

        // Right face
        1.0, -1.0, -1.0,
        1.0, 1.0, -1.0,
        1.0, 1.0, 1.0,
        1.0, -1.0, 1.0,

        // Left face
        -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
    ];

    //pass on position data to WebGL
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cube), gl.STATIC_DRAW);

    return {
        position: vBuffer,
    };
}

function Draw(gl, programInfo, buffers) {
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

    mat4.perspective(mProjMatrix, FoV, aspectRatio, nearPlane, farPlane);

    //TODO: World Matrix implementation
    //Draw to scene 0, translate back so the whole model is in view
    const viewMatrix = mat4.create();
    mat4.translate(viewMatrix, viewMatrix, [0.0, 0.0, -2.5]);

    //Rotation - W = TRS 
    mat4.rotate(viewMatrix, viewMatrix, 45 / Math.PI * 180, [1, 1, 0]);

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

        //set the program in WebGL
        gl.useProgram(programInfo.program);

        //set constant buffers
        gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, mProjMatrix);
        gl.uniformMatrix4fv(programInfo.uniformLocations.viewMatrix, false, viewMatrix);
    }

    const offset = 0;
    const vertCount = 24;
    gl.drawArrays(gl.LINE_LOOP, offset, vertCount);


}

function RunDemo() {
    console.log("Run Demo Button Clicked");
}