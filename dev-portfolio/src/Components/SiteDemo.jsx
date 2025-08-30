import { useEffect, useState, useRef } from "react";
import styles from "./SiteDemo.module.css";


const VS_SOURCE = `#version 300 es
    precision mediump float; 

    in vec3 vPosition; 

    void main(){ 
        gl_Position = vec4(vPosition, 1.0); 
    }
`;

const FS_SOURCE = `#version 300 es
    precision mediump float; 
    out vec4 FragColour; 

    #define DBG_SHOW_SCREEN_UVS 0

    const int kMaxSteps = 100; 
    const float kMaxDistance = 100.0; 
    const float kEpsilon = 0.001; 
    const float kGamma = 1.0 / 2.2; 

    uniform vec2 u_resolution; 

    //-------------------------------

    vec3 RayPoint(vec3 origin, vec3 dir, float t){ 
        return origin + dir * t; 
    }

    float SDF_Sphere(vec3 point,float radius){
        return length(point) - radius;
    }

    float Scene(vec3 point){
        float distance = SDF_Sphere(point, 1.0);
        return distance;
    }


    float RayMarch(vec3 origin, vec3 direction){
        
        float t = 0.0;
        
        for(int i = 0; i < kMaxSteps; i++){
            
            //Sample the scene using our ray. 
            vec3 p = RayPoint(origin, direction, t); 
            float s = Scene(p);
            
            t += s;

            //Return intersections. 
            if(s < kEpsilon){
                return t;
            }
            if(t > kMaxDistance){
                break;
            }
        }

        return kMaxDistance;
    }

    vec3 GammaCorrect(in vec3 colour){ 
        return pow(colour, vec3(kGamma));     
    }

    void main(){ 
        vec2 uv = gl_FragCoord.xy / u_resolution.xy; 
        uv -= 0.5; 
        uv.x *= u_resolution.x / u_resolution.y; 

        #if DBG_SHOW_SCREEN_UVS
        FragColour = vec4(uv.xy, 0.0, 1.0); 
        #else
            
        //Create the Ray
        vec3 rayOrigin = vec3(0.0, 0.0, 3.0);
        vec3 rayDirection = normalize(vec3(uv.xy, -1.0));

        //Ray March
        float t = RayMarch(rayOrigin, rayDirection);
        
        //Apply Shading
        vec4 colour = vec4(0.0);
        vec3 objectColour = vec3(1.0, 0.0, 0.0);
        
        if(t < kMaxDistance){
            //TODO: Normals, shading, etc., 
            colour.rgb = objectColour;
            colour.a = 1.0; 
        }
        
        colour.rgb = GammaCorrect(colour.rgb); 

        FragColour = vec4(colour);
        #endif
    }
`;


function CreateShaderProgram(gl, vertexShader, fragmentShader, name) {
    if (gl == null) {
        //TODO: Complain loudly!
        return null;
    }

    const program = gl.createProgram();
    console.log("Compiling Vertex Shader...\n");

    //TODO: fetch()...
    const vs_source = vertexShader;
    if (vs_source == null) {
        console.error("Failed to load Vertex Shader source!\n");
    }
    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vs_source);
    gl.compileShader(vs);
    gl.attachShader(program, vs);

    console.log("Compiling Fragment Shader...\n");

    const fs_source = fragmentShader;
    if (fs_source == null) {
        console.error("Failed to load Fragment Shader source!\n");
    }


    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fs_source);
    gl.compileShader(fs);
    gl.attachShader(program, fs);

    //Link the complete shader program for the main pass
    console.log("Linking Shader program for", name, "...\n");
    gl.linkProgram(program);

    //If this fails, halt and catch fire! 
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Vertex Shader Compilation Output: ", gl.getShaderInfoLog(vs));
        console.error("Fragment Shader Compilation Output: ", gl.getShaderInfoLog(fs));
        console.error("Shader Program Linking Output: ", gl.getProgramInfoLog(program));
    }

    return program;
}


export default function SiteDemo() {
    const mainCanvasRef = useRef(null);
    var gl = null;

    useEffect(() => {
        console.log("Initializing Site Demo.\n");
        const canvas = mainCanvasRef.current;
        const webGL = canvas.getContext("webgl2");
        if (webGL == null) {
            alert("Failed to initialize WebGL!\nWebGL may be unsupported by this browser.");
        }
        /*
        */
        gl = webGL;

        const program = CreateShaderProgram(gl, VS_SOURCE, FS_SOURCE, "Main Program");


        //Set up the Screen Quad. 
        const vertexBuffer = webGL.createBuffer();
        {
            console.log("Creating Screen Quad...");

            //Create the vao
            const vao = webGL.createVertexArray();
            webGL.bindVertexArray(vao);

            //Retrieve the index of our position data from the pass_main. 
            const vPositionIndex = webGL.getAttribLocation(program, "vPosition");

            //Set the Vertex Input Layout
            webGL.bindBuffer(webGL.ARRAY_BUFFER, vertexBuffer);
            webGL.enableVertexAttribArray(vPositionIndex);
            webGL.vertexAttribPointer(vPositionIndex, 3, webGL.FLOAT, false, 0, 0);

            //Bind and Populate our vertex buffer. (No, I'm not a tyrant!) 
            //NOTE: Account for AntiClockwise winding order!
            const verts = new Float32Array([
                //Tri 0
                -1.0, -1.0, 0.0,
                1.0, 1.0, 0.0,
                -1.0, 1.0, 0.0,

                //Tri 1
                -1.0, -1.0, 0.0,
                1.0, -1.0, 0.0,
                1.0, 1.0, 0.0,
            ]);

            webGL.bindBuffer(webGL.ARRAY_BUFFER, vertexBuffer);
            webGL.bufferData(webGL.ARRAY_BUFFER, verts, webGL.STATIC_DRAW);
        }

        gl.useProgram(program); 
        var u_resolutionLocation = gl.getUniformLocation(program, "u_resolution");
        gl.uniform2f(u_resolutionLocation, canvas.width, canvas.height);

        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 6); //Draw the Screen Quad. 
    });
    return (
        <canvas ref={mainCanvasRef} className={styles.mainCanvas} />
    )
}