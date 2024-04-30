---
Title: Vulkan Renderer
Date: 2024-04-30
layout: project
categories: Project Featured 
tags: C++ 
permalink: /Projects/:title/
card: /Resources/Cards/Firefly_v1_0_SiteCard_1000x500.png 
screenshots: [ /Resources/Cards/Firefly_v1_0_SiteCard_1000x500.png ] 
summary: A Project Exploring the Vulkan API.
documentation: "https://ewanburnett.github.io/Vulkan-Renderer/"
repository: "https://github.com/EwanBurnett/Vulkan-Renderer"
download: "https://github.com/EwanBurnett/Vulkan-Renderer/releases/tag/v0.1.0"
version: v0.1.0a
blogposts: [  ]
video: ""
platforms: [ Windows, Mac, Linux ]
---
## Overview
Firefly is an Offline Path tracer, written using C++. It simulates light rays to produce realistic images, based on XML Scenes.

## Usage
Either Build the project from source following the instructions in the [Repository]({{ page.repository }}), or download the latest release for your platform from [Here]({{ page.download }})

```
./Firefly -w [Width] -h [Height] -f [Output File] -s [Scene] -a [Anti-Aliasing Count] -d [Ray Depth]
```

![An Example Render](https://user-images.githubusercontent.com/25666480/268399662-264f8bf7-c5ac-4ad5-a297-dd3ed830be27.png)

## Scenes
Firefly Scenes are defined in XML, following a simple syntax:

```xml
<World name="Example Scene">

    <!--Define the Camera View-->
    <Views>
        <Camera id="Main Camera">
            <Position x="0.0" y="0.0" z="0.0"/>
            <Orientation x="0.0" y="0.0" z="-1.0"/>
            <FocalLength>1.0</FocalLength>
            <FoV>110</FoV>
            <DefocusAngle>0</DefocusAngle>
        </Camera>
    </Views>

    <!--Define the Scene-->
    <Scene>
        <!--A Lambertian Sphere-->
        <Object id="Lambert" type="FF_SPHERE">
            <Position x="0.0" y="-42.0" z="-10.0"/>
            <Radius>40</Radius>
            <Material type="Lambert">
                <Albedo r="0" g="1" b="0" a="1"/>
            </Material>
        </Object>

        <!--A Metallic Sphere-->
        <Object id="Metal" type="FF_SPHERE">
            <Position x="4.5" y="3.25" z="-10.0" />
            <Radius>2.5/</Radius>
            <Material type="Metal">
                <Albedo r="0" g="0" b="1" a="1" />
                <Fuzziness>0.5</Fuzziness>
            </Material>
        </Object>
        
        <!--A Dielectric Sphere-->
        <Object id="Dielectric" type="FF_SPHERE">
            <Position x="4.5" y="-3.25" z="-10.0" />
            <Radius>2.5/</Radius>
            <Material type="Dielectric">
                <Tint r="1" g="0" b="1" a="1"/>
                <IR>3.0</IR>
                <Fresnel>1.0</Fresnel>
            </Material>
        </Object>
    </Scene>
</World>
```
