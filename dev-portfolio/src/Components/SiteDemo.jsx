import { useEffect, useState, useRef, React } from "react";
import styles from "./SiteDemo.module.css";
import axios from "axios";


//TODO: Embed these for now... 
const vs_blob = `#version 300 es
precision mediump float;

in vec3 vPosition;

void main(){
    gl_Position=vec4(vPosition,1.);
}`;

const fs_blob = `#version 300 es
precision lowp float;
out vec4 FragColour;

#define DBG_SHOW_SCREEN_UVS 0
#define DBG_SHOW_NORMALS 1

const int kMaxSteps=100;
const float kMaxDistance=100.;
const float kEpsilon=.1;
const float kGamma=1./2.2;

uniform float u_time;
uniform vec2 u_resolution;

//-------------------------------

vec3 RayPoint(vec3 origin,vec3 dir,float t){
    return origin+dir*t;
}

//via https://iquilezles.org/articles/distfunctions/
float SDF_Octahedron(vec3 point,float size){
    point=abs(point);
    float m=point.x+point.y+point.z-size;
    vec3 q;
    if(3.*point.x<m)q=point.xyz;
    else if(3.*point.y<m)q=point.yzx;
    else if(3.*point.z<m)q=point.zxy;
    else return m*.57735027;
    
    float k=clamp(.5*(q.z-q.y+size),0.,size);
    return length(vec3(q.x,q.y-size+k,q.z-k));
}

float SDF_Sphere(vec3 point,float radius){
    return length(point)-radius;
}

float Scene(vec3 point){
    float distance=SDF_Sphere(point+vec3(0.,sin(u_time),0.),1.);//SDF_Octahedron(point, 1.0);
    return distance;
}

vec3 GetNormal(vec3 point){
    float center=Scene(point);
    float dX=Scene(point+vec3(kEpsilon,0.,0.));
    float dY=Scene(point+vec3(0.,kEpsilon,0.));
    float dZ=Scene(point+vec3(0.,0.,kEpsilon));
    
    return(vec3(dX,dY,dZ)-center)/kEpsilon;
}

float RayMarch(vec3 origin,vec3 direction){
    
    float t=0.;
    
    for(int i=0;i<kMaxSteps;i++){
        
        //Sample the scene using our ray.
        vec3 p=RayPoint(origin,direction,t);
        float s=Scene(p);
        
        t+=s;
        
        //Return intersections.
        if(s<kEpsilon){
            return t;
        }
        if(t>kMaxDistance){
            break;
        }
    }
    
    return kMaxDistance;
}

vec3 GammaCorrect(in vec3 colour){
    return pow(colour,vec3(kGamma));
}

void main(){
    vec2 uv=gl_FragCoord.xy/u_resolution.xy;
    uv-=.5;
    uv.x*=u_resolution.x/u_resolution.y;
    
    #if DBG_SHOW_SCREEN_UVS
    FragColour=vec4(uv.xy,0.,1.);
    #else
    
    //Create the Ray
    vec3 rayOrigin=vec3(0.,0.,3.);
    vec3 rayDirection=normalize(vec3(uv.xy,-1.));
    
    //Ray March
    float t=RayMarch(rayOrigin,rayDirection);
    
    //Apply Shading
    vec4 colour=vec4(0.);
    vec3 objectColour=vec3(1.,0.,0.);
    
    vec4 lightColour=vec4(1.,1.,1.,1.);
    vec3 lightDirection=vec3(.8,.5,1.);
    
    if(t<kMaxDistance){
        vec3 toLight=normalize(lightDirection);
        vec3 normal=GetNormal(RayPoint(rayOrigin,rayDirection,t));
        float n_dot_l=max(0.,dot(normal,toLight));
        
        #if DBG_SHOW_NORMALS 
        colour.rgb = normal.rgb; 
        #else
        colour.rgb=objectColour*n_dot_l;
        #endif
        colour.a=1.;
    }
    
    colour.rgb=GammaCorrect(colour.rgb);
    
    FragColour=vec4(colour);
    #endif
}

`;


const useRequestAnimationFrame = callback => {
    const requestRef = useRef();
    const previousTimeRef = useRef();
    const animate = time => {
        if (previousTimeRef.current) callback(time - previousTimeRef.current);
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };
    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);
};

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
    const [VS_SOURCE, setVertexShaderSource] = useState(null);
    const [FS_SOURCE, setFragmentShaderSource] = useState(null);

    const mainCanvasRef = useRef(null);
    const gl = useRef(null);
    const program = useRef(null);
    const time = useRef(0);

    function Draw(gl, program) {
        const canvas = mainCanvasRef.current;
        if (canvas != null) {
            gl.useProgram(program);

            var u_timeLocation = gl.getUniformLocation(program, "u_time");
            gl.uniform1f(u_timeLocation, time.current);

            var u_resolutionLocation = gl.getUniformLocation(program, "u_resolution");
            gl.uniform2f(u_resolutionLocation, canvas.width, canvas.height);
            //console.log(canvas.width + "x" + canvas.height);

            gl.clearColor(0.0, 0.0, 0.0, 0.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 6); //Draw the Screen Quad. 
        }
    }

    useEffect(() => {
        console.log("Initializing Site Demo.\n");
        const canvas = mainCanvasRef.current;

        const webGL = canvas.getContext("webgl2");
        if (webGL == null) {
            alert("Failed to initialize WebGL!\nWebGL may be unsupported by this browser.");
        }
        gl.current = webGL;

        //Load the shaders
        /*
        axios.get("/data/shaders/vs_sitedemo.vert")
            .then((res) => {
                setVertexShaderSource(res.data); 
            }
        ); 
        axios.get("/data/shaders/fs_sitedemo.frag")
            .then((res) => {
                setFragmentShaderSource(res.data); 
            }
        )
            */
        console.log(vs_blob);
        setVertexShaderSource(vs_blob);
        setFragmentShaderSource(fs_blob);

        program.current = CreateShaderProgram(gl.current, VS_SOURCE, FS_SOURCE, "Main Program");


        //Set up the Screen Quad. 
        const vertexBuffer = webGL.createBuffer();
        {
            console.log("Creating Screen Quad...");

            //Create the vao
            const vao = webGL.createVertexArray();
            webGL.bindVertexArray(vao);

            //Retrieve the index of our position data from the pass_main. 
            const vPositionIndex = webGL.getAttribLocation(program.current, "vPosition");

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

        const onResize = e => {
            const canvas = mainCanvasRef.current;
            //console.log("Resizing! \nOriginal:" + canvas.width + "x" + canvas.height);
            mainCanvasRef.current.width = canvas.offsetWidth;
            mainCanvasRef.current.height = canvas.offsetHeight;
            //`1console.log("new:" + canvas.width + "x" + canvas.height);
            Draw(gl.current, program.current);
        };

        onResize();
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        }
    });

    useRequestAnimationFrame(deltaTime => {
        Draw(gl.current, program.current);
        time.current = time.current + (deltaTime * 0.001);
        //console.log(time.current)
    });

    return (
        <canvas ref={mainCanvasRef} className={styles.mainCanvas} />
    )
}