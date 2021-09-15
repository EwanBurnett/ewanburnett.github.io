function main() {
    const canvas = document.querySelector("#demoCanvas");

    //init WebGL context
    const gl = canvas.getContext("webgl");

    if (gl == null) {
        alert("WebGL Initialization Failed. WebGL may be unsupported by this browser.");
        return;
    }

    //Clear
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;