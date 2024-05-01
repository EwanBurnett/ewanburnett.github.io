---
Title: Vulkan Renderer
Date: 2024-04-30
layout: project
categories: Project Featured 
tags: C++ 
permalink: /Projects/:title/
card: "https://github.com/EwanBurnett/Vulkan-Renderer/assets/25666480/6619d4ec-7513-4140-8dd3-47223ea08a4d"
screenshots: [ "https://github.com/EwanBurnett/Vulkan-Renderer/assets/25666480/6619d4ec-7513-4140-8dd3-47223ea08a4d" ] 
summary: A Project Exploring the Vulkan API.
documentation: "https://ewanburnett.github.io/Vulkan-Renderer/"
repository: "https://github.com/EwanBurnett/Vulkan-Renderer"
download: "https://github.com/EwanBurnett/Vulkan-Renderer/releases/tag/v0.1.0"
version: v0.1.0
blogposts: [  ]
video: ""
platforms: [ Windows, Mac, Linux ]
---
## Overview
This Project was built to explore the Vulkan API. Coming from DirectX 11, Vulkan is infinitely more verbose and particular - but as a modern API, maps closer to the hardware's architecture.  

## Build Instructions

Clone the Repository
```
git clone {{ page.repository }}
cd ulkan-Renderer/ 
```
### Library
Include the VKR library in your project's CMakeLists.txt

```
<CMakeLists.txt>
# ...

# Add the Repository using FetchContent
include(FetchContent) 

FetchContent_Declare(
    VKR
    GIT_REPOSITORY {{ page.repository }}
    GIT_TAG {{ page.version }}
)

FetchContent_MakeAvailable(VKR)

# Other Project Configuration ...

target_link_libraries(${PROJECT_NAME} VKR)

```

### Samples
Generate Project Files through CMake

*note: The `VKR_BUILD_SAMPLES` option must be set to `ON`*
```
mkdir build && cd build
cmake .. -DVKR_BUILD_SAMPLES=ON -DCMAKE_BUILD_TYPE=Release     #Other Configurations are Debug, RelWithDbgInfo
```

then build the generated project.
```
# e.g. using Makefiles
cd [Sample Project to Build]
make -j8
```

## Sample Projects

### 01 - Hello Triangle 
![01-Hello-Triangle]({{ page.card }}) 

Read the Project Docs [Here](https://ewanburnett.github.io/Vulkan-Renderer/subpage.html#autotoc_md4)


Precompiled Binaries for Windows and Linux (x64) are also available [Here]({{ page.download }})
