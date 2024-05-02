---
Title: Getting Bootstrapped In Vulkan
Date: 2024-04-29
layout: blog
categories: Personal Blog 
tags: C++ Vulkan 
permalink: /Projects/:title/
card: "/Resources/Cards/VKTriangle_Card.png"
summary: Getting started with the Vulkan API, and Displaying a Triangle on the screen. 
repository: "https://github.com/EwanBurnett/LearningVulkan"
download: "https://github.com/EwanBurnett/Vulkan-Renderer/releases/tag/v0.1.0"
video: "https://www.youtube.com/embed/PMFbgZx2WOc"
---

# The VKR Library

## Motivation
- Explore and Learn the Vulkan API
    - Coming from DirectX 11, though same concepts apply, it's a completely different interface
    - Important to learn a Modern Graphics API 

## Structure
- VKR Library
    - Contains common helpers for getting started with Vulkan
        - `VKR/` directory contains common utilities (logging, windowing, maths etc.,)
        - `VKR/Vulkan/` directory contains vulkan specific helpers
    - Delegates proper implementation to the User
        - Not an Engine Library! 
        - Like writing my own version of DX11     
- VKR Samples
    - `Samples/` Directory
    - Applications investigating a particular topic 
        - `00-Dev` is for quick testing, not intended to be used as an actual sample application. 
- Renderer Application
    - `Renderer/` Directory
    - A more complete application, implementing the topics explored in the sample applications

# Initialization

## Windowing
- include `VKR/Window.h`
- Wrapper around [GLFW 3.4](https://github.com/glfw/glfw.git)
    - Convenient and largely Platform-agnostic windowing library
    - Might eventually roll my own windowing backend for other platforms (e.g. Android) 
        - API specifics are tricky, and better suited to a fully fledged game engine project. 
- Access GLFW Native handle via `Window::GLFWHandle()` method 

## Setting up Vulkan
- Vulkan Initialization requires a few object handles
    - VkInstance 
    - VkPhysicalDevice
    - VkDevice

### Debugging and Validation 
- Vulkan Debug Objects
    - VkDebugUtilsMessengerEXT
    - VkDebugReporterEXT
    - Enabling Validation Layers

# Rendering
- Work Submission 
    - Record commands into a command buffer
        - e.g. `vkCmdCopyBuffer()` `vkCmdDraw()` `vkCmdDispatch()`
    - Action-type and State-type commands
        - Action-type performs some kind of work
        - State-type sets some sort of state 
    - Submit them to a VkQueue for execution
        - `VkQueueSubmit()`
        - Multiple command buffers can be submitted to a queue at once, but they will be processed in order of submission. 
- Drawing a triangle 
    - Usually requires a few things 
        - `VkPipeline`
            - Describes the shaders bound 
        - `VkDescriptorSet` 
            - Describes the resources bound 
        - `VkRenderPass` 
            - Describes Render attachments 
            - Split into subpasses 
            - Handles Layout transitions automatically 
        - `VkBuffer`
            - Holds data for shader execution 
            - Usually at least one bound for Vertex data, but in this demo we'll hard-code them into the Vertex Shader. 

## Synchronisation
- Collection of Objects and commands Used to synchroize resource access or execution between different Action-Type commands 
    - Objects
        - `VkSemaphore`
        - `VkFence` 
        - `VkEvent`
    - Commands
        - `vkCmdPipelineBarrier`
        - `vkCmdSetEvent` 
        - `vkCmdBeginRenderPass` / `vkCmdEndRenderPass`
        - `vkCmdWaitFences`
    - Wait-Idle Commands 
        - `VkQueueWaitIdle()` / `VkDeviceWaitIdle` 
        - Very heavyweight operations - flushes all work from the queue / device
        - Can't be used in fine-grained synchronisation, but fine for application destruction. 
- See fantastic Vulkan Synchronisation lecture by Johannes Unterguggenberger for an in-depth dive 

## Frames in Flight
- Slight issue with current synchronisation
    - We're only doing one frame of work at a time 
        - CPU work and GPU work are being serialized! 
- Solution: Work on multiple frames at once! 
    - Increases latency by `N` frames, but allows for more work to be fed to the device 
    - Requires a `VkSemaphore` and `VkFence` per frame-in-flight
    - This causes another issue: Resource access race conditions 
        - So, just sidestep the issue and buffer the relevant resources equal to frames-in-flight

# Using the Vulkan Memory Allocator Library
- Why VMA? 
    - Originally planned on doing this manually, but implementation details are tricky to get right. 
    - VMA is a battle-tested standard allocator
- Hooking VMA into VKR
    - Function Overloads for `VkContext` Image / buffer Creation and Destruction methods with VMA specific parameters
        - Dispatch allocation to VMA
- Manually allocating Vulkan Memory
    - Requires `VkDeviceMemory` to be allocated, and bound to the resource

# Creating Pipelines
- Compute Pipelines
    - Used to execute General-Purpose GPU work via Compute Shaders
    - Only allows the Compute shader stage to be bound
- Graphics Pipelines 
    - Used for Rendering operations
    - Usually Requires a LOT of configuration
        - See Vulkan Specification for the whole breakdown 
- Pipeline Builder
    - `VKR/Vulkan/VkPipelineBuilder.h` 
    - Encapsulates pipeline state, and builds a `VkComputePipelineCreateInfo` or `VkGraphicsPipelineCreateInfo` struct based on it
    - Allows for easier pipeline creation 

# Integrating ImGui 

# Building the Sample App
