import { useEffect, useState, useRef, React } from "react";
import styles from "./SiteDemo.module.css";
import axios from "axios";

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