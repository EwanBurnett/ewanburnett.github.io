---
Title: Parallelism in Software Optimisation
Date: 2022-03-22
layout: project
categories: Coursework Project
tags: C++ 
permalink: /Projects/:title/
card: /Resources/Cards/Dino-Tiles.png
summary: Optimizing Software through Parallelism and Concurrency. 
repository: "https://github.com/EwanBurnett/"
download: ""
video: "https://www.youtube.com/embed/PMFbgZx2WOc"
---
# Overview

## Testing Hardware Specifications

All testing was conducted on my home computer in x64 Release configuration, using Visual Studio 2019 :

| -- | -- |
| CPU | Ryzen 7 3700x (@3.6GHz) |
| GPU | Nvidia GTX 1080ti (11GB VRAM) |
| DRAM | 2x 8GB T-Force Vulcan Z DDR4 @3200MHz |
| Motherboard | Aorus x570 Elite (AM4) |
| Test Drive | Sabrent Rocket M.2 1TB NVME |
| OS | Windows 10 Home Version 10.0.19042 Build 19042 (x64) |

# Part 1
## Application Overview

In this game, the player controls a dinosaur who eats tiles flying around the screen. Different tiles do different things; Wide tiles cause the player to grow, allowing them to eat more tiles at once at a cost to their speed. Fast tiles do the opposite, shrinking the player down but making them move considerably faster – though they break after a few collisions. Tiles additionally bounce off the walls and each other.

### Original State

Initially, the application executable is 74KB in size.
The original application has many memory and performance issues.  Using the Visual Studio Profiler highlights the memory problem; With the steadily increasing usage suggesting the presence of a memory leak.
![Memory-Leak-Evidence](/Resources/Blogs/Parallelism-In-Software-Optimisation/Screenshot_01.png)

Furthermore, the Hot Path shown by the CPU profiler indicates that the tile update and collision resolution functions are the most intensive, taking up roughly 2/3rds of each frame’s execution time each.
![Hot-Path](/Resources/Blogs/Parallelism-In-Software-Optimisation/Screenshot_02.png)

Predominantly due to factors, frame time is unacceptably slow – hovering on average around the 400ms mark – or around 2.5FPS (while the minimum target is 33.3ms for 30FPS).  

## Targets

After analysing the codebase, a number of significant optimisation targets can be made:

- Speeding up Tile Updating
- Reducing overheads of collision detection and resolution
- Reducing memory usage and removing memory leaks
- Reducing wasted data
- Reducing executable size

## Benchmarks

All benchmarking in this section was done using my handwritten Benchmarker library; an instrumentation based Benchmarker which reports specific events. As such, there may be some very negligible overheads to these times. Also, the initial 100 frames are ignored, as they may contain erroneous data from setting up the application etc.

### Game Loop

Final Game loop frame times (blue line is update, orange line is everything else)
![Game-loop-frame-times](/Resources/Blogs/Parallelism-In-Software-Optimisation/Screenshot_03.png)

- Max frame time is ~5ms, average is ~1ms
- Dramatic speedup
- Most of the time spent outside of the update loop, as opposed to the inverse.

## Optimization

### Data Types

The application initially stores data quite wastefully, using many 64-bit types throughout, and duplicating data unnecessarily. In order to alleviate this, I modified the code to mainly use 32-bit types throughout (e.g. float, int), as 64-bit types are never required.
The best example of this is the Vector4 struct – A container for 4 64-bit doubles – totalling 256-bits in size. This struct is used commonly for holding packed data, such as positions or velocities, and is effectively using 4 times as much data as is necessary as the game takes place in 2D space.
![Vector4-to-Vector2f](/Resources/Blogs/Parallelism-In-Software-Optimisation/Screenshot_04.png)

To fix this, I converted the struct to a Vector2f – containing 2 32-bit floats. This, is 4 times smaller than its predecessor, and is also much more suitable to its use case. Other similar cases exist throughout the modified codebase.
In the final version, the application’s memory usage goes down to a stable 61MB, from the previous ~180MB (not accounting for the memory leak). No explicit allocations are made during execution.
![New-Memory-Usage](/Resources/Blogs/Parallelism-In-Software-Optimisation/Screenshot_05.png)

### Containers
- Previous implementation uses a sparse array
  - Everything is contiguous, which is great
  - However, a huge chunk of the particles are set to ‘free’ (or unused)
  - And we’re looping through PARTICLE_MAX particles each frame
- Using containers can alleiviate this issue
  - Container requirements
    - Contiguous
    - Allows for simple, fast spawning and despawning of particles
  - Settled on a Fixed Vector
    - Much like stl vectors, these allow for the pushing and popping of elements.
- Very fast element access
        - Fixed vectors don’t resize, meaning memory usage remains constant.
        - Is equally possible to use a STL Vector, or a stack data structure.
- Previous implementation more similar to a pool structure.
  - Enables Spawning and Despawning of particles.
    - Spawning is just pushing back onto the vector
    - Despawning is a little more involved
- Swap the element to despawn with the element at the back of the vector, then pop the back of the vector.
- This keeps all vector elements contiguous, and reduces the size appropriately.
  - Reduced iterations
    - Now, instead of looping through PARTICLE_MAX elements constantly, per frame, we loop through however many particles are actually active per frame.
    - This speeds up not only updating particles, but also rendering.
![New-Memory-Usage](/Resources/Blogs/Parallelism-In-Software-Optimisation/Screenshot_08.png)

### Reducing String Comparisons

Struct of Arrays (DoD)

- Tile struct size
  - Old: 512 bits
  - New: 168 bits (33%)
- Wide tile lifetimes and Fast tile hits both stored in the lifetime member. Usage varies based on type.

### Parallelism with SIMD Vector Processing

SIMD allows parallelism by using the hardware’s XMM registers; allowing us to operate on multiple pieces of data simultaneously. Due to specification limits, I used the 128-bit wide registers, because of their compatibility (virtually all modern machines will support up to the SSE4.1 register set), though the larger 256-bit wide registers could offer even larger speed increases.

We achieve parallelism by loading our data into 4 lanes; for example, the (now contiguous) position data is loaded 4 at a time, and each is updated based on the (also contiguous) velocity data to move the tiles. This is achieved using SIMD compiler intrinsics, alongside pointer arithmetic.  
![SIMD-Tile-updates](/Resources/Blogs/Parallelism-In-Software-Optimisation/Screenshot_06.png)

Further, more complex uses for SIMD in this program include performing conditional checks using bitwise comparisons and masks, Operating on multiple tile rects at a time, and dynamically selecting data from specific lanes.

### Broad-phase Collision Optimisation

Another major bottleneck was Tile vs Tile collisions; Previously, the application would check each tile against each other tile – resulting in a consistent 65536 iterations per frame, in an algorithm that is of complexity O(n)^2. Needless to say, this is slow.
A common solution to this problem is to implement broad phase space partitioning – things such as K-D trees are common in more complex applications, but in this one, the Sweep and Prune algorithm is more than suitable. Instead of testing each tile against each other tile, this algorithm instead reports pairs of possible collisions, by comparing intervals determined by their minimum and maximum positions along an arbitrary axis. Here, I’ve chosen the X axis to “sweep” along.
![sweep-and-prune](/Resources/Blogs/Parallelism-In-Software-Optimisation/Screenshot_07.png)

(image via [researchgate.net](https://www.researchgate.net/publication/340681126_Heterogeneous_Design_and_Efficient_CPU-GPU_Implementation_of_Collision_Detection/figures?lo=1))

Implementing this algorithm offers a dramatic speed increase; going from //INSERT DATA HERE previously to //INSERT DATA HERE after implementation.

### Multithreading 

![Game-loop-frame-times](/Resources/Blogs/Parallelism-In-Software-Optimisation/Screenshot_09.png)

# Changelog

//INSERT IMAGE OF FINAL GAME

- Implemented significant optimisations (SIMD, Data oriented Design, Sweep & Prune, etc.,)
- Removed Tile, Tile_Normal, Tile_Wide and Tile_Fast types in place of Data-oriented Entities struct.
- Replaced all 64-bit types with their 32-bit equivalents
- Now using bitwise type IDs in place of strings for type checking.
- Removed some external dependencies
- Tile and player AABB sizes are now cached in a map data structure
- Modified the random_getd method to return a float instead of a double.
- Implemented Intersection test methods, compatible with the Rect structure, and SIMD.
- Modified the get_player_texture_rect and get_tile_texture_rect functions to use a bitwise type as a parameter, instead of a string.
- Refactored Tile vs Player and Tile vs Wall collisions to use SIMD
- Implemented the Sweep and Prune broad phase collision algorithm
- Updating tile positions and velocities is now done via SIMD.
- Refactored Tile state updating to use SIMD
- Refactored Rendering methods to use bitwise IDs
- Disabled Debug output in release mode
- Refactored Player class
- Removed all iterators
- Removed memory leak
- Removed unused game constants
- Removed all virtual functions
- Removed random_geti
- Removed structs 'Particle_A, Particle_B and Particle_C'
- Abstracted particle struct; moved some members into constants
- Modified 256-bit vector4 struct into 64-bit vector2 struct
- Modified 256-bit colourf struct into 64-bit colourRGBA struct
- Changed global floating point type from 64-bit doubles to 32-bit floats
- Modified random_getd() into random_getf(), using floats instead.
- Added additional constants for threading
- Changed constant type from static const to constexpr, so they can be evaluated at compile time.

## Known Bugs

- Player vs Wall collisions ‘stick’ the player to an axis
- Player and Tile rects are improperly positioned, and collisions don’t display properly.
- Wall sprites are not being drawn to the screen.
- Wall size is inconsistent between the original and modified versions
- …and more!
