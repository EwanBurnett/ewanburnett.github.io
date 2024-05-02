---
Title: Skyblazer
Date: 2023-06-01
layout: project
categories: Project Featured 
tags: C++ 
permalink: /Projects/:title/
card: "https://github.com/EwanBurnett/Vulkan-Renderer/assets/25666480/6619d4ec-7513-4140-8dd3-47223ea08a4d"
screenshots: [ "https://github.com/EwanBurnett/Vulkan-Renderer/assets/25666480/6619d4ec-7513-4140-8dd3-47223ea08a4d" ] 
summary: A Space Shooter, Developed from scratch using DirectX 11
documentation: "https://ewanburnett.github.io/Skyblazer/"
repository: "https://github.com/EwanBurnett/Skyblazer"
download: "https://github.com/EwanBurnett/Skyblazer/releases/tag/v0.1.0"
version: v0.1.0
blogposts: [  ]
video: ""
platforms: [ Windows, Mac, Linux ]
---

## Overview
Skyblazer is a Space Shooter, developed for Windows in C++ and DirectX 11. 

## Build Instructions

Clone the Repository
```
git clone {{ page.repository }}
cd Skyblazer/ 
```

Generate Project Files through CMake

```
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release     #Other Configurations are Debug, RelWithDbgInfo
```

then build the generated project.
```
# e.g. using Makefiles
cd [Sample Project to Build]
make -j8
```

Read the Project Docs [Here](https://ewanburnett.github.io/Skyblazer/subpage.html#autotoc_md4)


Precompiled Binaries for Windows (x64) are also available [Here]({{ page.download }})
