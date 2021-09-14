---
Title: DirectX 11 First Triangle
Date: 2021-08-19
layout: blog
---
<h1>First Triangle using DirectX 11</h1>
Yesterday, I made my first triangle in DX11! 

Here's a video of the Demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/PMFbgZx2WOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

After hours of working through Frank Luna's book on DX11 programming, I finally reached chapter 6 - Drawing in DirectX 11.

At this point, I already had a rudementary framework thanks to following along in the book, and I'd implemented a few more modern features (i.e. WRL COM pointers), and a colour changing window. 

To outline the process, after initializing my graphics, I made a simple Vertex struct, containing both position and colour. 
```cpp
struct Vertex1 {
		XMFLOAT3 pos;
		XMFLOAT4 color;
	};
```

Next came a Vertex and Index buffer for my geometry. Since I was just drawing a triangle, these were both quite simple to create. Filling the buffer descriptions was pretty trivial, even though it took quite a long time.
```cpp
//Vertices of the Vertex Buffer
Vertex1 verts[] =
	{
		{XMFLOAT3(0, 0.5, 0), XMFLOAT4(1, 0, 0, 1)},
		{XMFLOAT3(0.5, -0.5, 0), XMFLOAT4(0, 1, 0, 1)},
		{XMFLOAT3(-0.5, -0.5, 0), XMFLOAT4(0, 0, 1, 1)}
	};

//Indexes used in the Index Buffer
	UINT indices[3] = {
		0, 1, 2,	
	};
```

Next, I set the Rasterizer state to draw using the fill mode ```D3D11_FILL_SOLID```, so that my triangle would be solid. So far, so good. But then came the problem stage...

I wrote a simple Vertex shader and Pixel shader, both of which just output the position and colour of each Vertex respectively. This was my first time using HLSL; The language is deceptively simple. After having a peek at some documentation, I can already tell it's a topic i'm going to spend hundreds of hours in. 
```cpp
    struct VSIn {
        float3 position : POSITION;
        float4 color : COLOR;
    };

    struct VSOut {
        float4 position : SV_POSITION;
        float4 color : COLOR;
    };

    //Vertex Shader
    VSOut VS_main(VSIn input)
    {
        VSOut vso;
        vso.position = float4(input.position, 1.0f);
        vso.color = input.color;
        return vso;
    }

    //Pixel Shader
    float4 PS_main(VSOut pin) : SV_Target
    {
	    return pin.color;
    }
```

However, when it came to binding these shaders to the pipeline, I had a few issues. Mainly resulting from me not understanding how the ```ID3D11Blob``` interface works. After a short break and some research, I quickly figured out the issue (I was attempting to load the raw .HLSL files into the blob instead of the compiled .CSO files), and was able to carry on.

Finally, I used the ```DrawIndexed()``` method to draw my triangle - and here's the result!
>![Complete Triangle!](https://raw.githubusercontent.com/EwanBurnett/ewanburnett.github.io/master/Resources/Hello-Triangle-Render.png)

At this stage, everything *really* ought to have worked. But... Of course I made 2 silly mistakes. After spending hours pouring over this code, I ended up reaching out to the awesome folks over on the DirectX discord for some help - and to be fair, due to their nature I doubt I would have found these errors on my own. 

1. I was drawing into the render target, but clearing it right after in my Update code (WinMain.cpp)
2. I don't have a Depth/Stencil view bound, but I was still attempting to bind one to the pipeline

After fixing those two sneaky errors, I finally had my long-awaited Triangle!

I've learned a lot from this project so far - Hundreds of things are happening even for something so simple! And I don't think i've ever been so relieved to see a simple triangle on the screen. Next step: A 3D Box! 

Thanks for reading!
(
The Demo for this project can be found [here](https://github.com/EwanBurnett/ewanburnett.github.io/blob/c04900621cc99262d97a59ec8b18a17a61a32855/Resources/DX11-Triangle-Demo.zip), and the source code can be found on my [Github](https://github.com/EwanBurnett/DirectX-11-Practice/tree/50f9231dff9bfa18e06bbf79b19a8be96df43d8c). This isn't using a standard framework yet, so future demos' source may differ.)