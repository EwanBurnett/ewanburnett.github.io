---
title: "Ewan Burnett"
layout: default
---

<html>
    <head>
        <meta charset="UTF-8">
        <meta name = 'viewport' content = 'width = device-width, initial-scale = 1.0'>
        <title>Portfolio</title>
        <link rel = 'stylesheet' href = '/assets/css/stylesheet.css'>
        <link rel="stylesheet" href="/assets/css/flickity.css" media="screen">
        <link rel="stylesheet" href="/assets/css/fullscreen.css" media="screen">
        <link rel="stylesheet" href="node_modules/github-activity-feed/dist/github-activity.min.css">
        <link rel="stylesheet" href="node_modules/octicons/build/font/octicons.css">
        <link rel="stylesheet" href="node_modules/github-activity-feed/dist/github-activity.dark.min.css">
        <link rel="stylesheet" href="https://unpkg.com/octicons@4.4.0/build/font/octicons.css">
        <link rel="stylesheet" href="https://unpkg.com/github-activity-feed@latest/dist/github-activity.min.css">
        <script type="text/javascript" src="https://unpkg.com/mustache@4.2.0/mustache.min.js"></script>
        <script type="text/javascript" src="https://unpkg.com/github-activity-feed@latest/dist/github-activity.min.js"></script>
        <!-- if using dark theme add this in addition to the main CSS file -->
        <link rel="stylesheet" href="https://unpkg.com/github-activity-feed@latest/dist/github-activity.dark.min.css">
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?">
    </head>
    <body>
    <!--Intro Section-->
    <section id = 'intro'>
        <div style="width:99%; margin:10%, 8%;">   <!--Intro Wrapper-->
            <div style="float: left; width:60%; position: relative; background-colour: purple;">
            <!--Site Demo-->
            <canvas id = 'demoCanvas' width = '1280' height = '720' style="display: flex;"></canvas>
            </div>
            <!--Intro Taglines-->
            <div style="float: right; width:40%; background-colour: red;">
                <!--Translate Button-->
                <div style = "float: right;">
                    <button class = "b0" onClick = "switchLanguage()">EN/日本語</button>
                </div>
                <!--Site Intro-->
                <div style = "position: relative; margin: 10px;  margin-top: 30%;">
                    <h1 lang="en" class="en">Hi, I'm Ewan - A Graphics Programmer</h1>
                    <h1 lang="jp" class="jp" style="display: none;">グラヒックスプログラマーのユアンです</h1>
                    <div style = "display: flex; flex-direction: row;">
                    <button style="display: flex;" class = 'b0 en' onClick = "window.location.href='#projects'">See what I can do </button> 
                    <button style="display: flex;" lang="jp" style="display:none;" class = 'b0 jp' onClick = "window.location.href='#projects'">プロジェクトを見て</button>
                    <button style="display: flex; margin-left: 3%;" class = 'b0 en' onClick = "location.href='/Resources/Ewan_Burnett_CV_2023.pdf'" target = "_blank">CV / Resumé </button>
                     <button style="display: none; margin-left: 3%;" class = 'b0 jp' onClick = "location.href='/Resources/Ewan_Burnett_CV_2023.pdf'" target = "_blank">履歴書</button> <!--TODO: Japanese CV-->
                    </div>
                </div>
                <!--Socials-->
                <div style="float: right; margin-right: 5%; margin-top:5%; ">
                    <a class='icon' href="http://github.com/EwanBurnett" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a class='icon' href="https://www.linkedin.com/in/ewanburnettsk/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a class='icon' href="https://twitter.com/StrikerDEV_" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    <a class='icon' href="mailto:ewanburnettsk@outlook.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                </div>
            </div>
        </div>
    </section>
    <!--Projects Section-->
    <section id = 'projects'>
        <div style="width:100%;">   <!--Projects Wrapper-->
            <div>
                <h1 style="display: flex; flex-direction: column; justify-content: center; text-align: center;">-Projects-</h1>
                <div>
                <div class="showreel js-flickity">
                    {% for post in site.categories.Featured limit: 4 %}
                        <div>
                            <div class="slide">
                            <a href = "{{ post.url }}">
                                <img style="width: 1000px; object-fit: contain;" src="{{ post.card }}">
                            </a>
                            </div>
                        </div>
                    {% endfor %}
                </div>  
                </div>
                <div id="project_descs">
                {% for post in site.categories.Featured limit: 4 %}
                    {% if forloop.index == 0 %}
                        <div class = "desc" style="padding-top:1%; display:block;">
                    {% else %}
                        <div class = "desc" style="padding-top:1%; display:none;">
                    {% endif %}
                        <h2 style="display: flex; flex-direction: column; justify-content: center; text-align: center;">{{ post.title }}</h2>
                        <p style="display: flex; flex-direction: column; justify-content: center; text-align: center;">{{ post.summary }}</p>
                    </div>
                    {% endfor %}
                </div>
            </div>
            <!--Project Subnavigation Bar-->
            <div class = 'projectSubnav' style="margin-top:40px;margin-bottom:40px; margin-left: 80px; margin-right: 80px;">
            <h2>Latest</h2>
            <div style="display:flex; flex-direction:column; margin-bottom: 30px;">
            <div style="display: inline-block;">
                <!--Latest Project-->
                <div style="float: left; width: 78%;">
                    {% for post in site.categories.Project limit:1 %}
                        <div style="align-items: center; display: flex; height: 100%;">
                            <div >
                                <a href = "{{ post.url }}" style="margin-right: 35px;">
                                    <img style = "width: 800px; object-fit: contain;border: 1px solid white;" src = "{{ post.card }}"/>
                                </a>
                            </div>
                            <div style = "display: flex; flex-direction: column;">
                                <div style = "display: flex; flex-direction: row;">
                                    <h2 style="margin-right: 15px;">{{ post.title }}</h2>  
                                </div>
                                <div>
                                    <p>{{ post.summary }}</p>
                                    <a class = "btn" href="{{ post.repository }}" style="margin-right: 20px;">Repository</a>
                                    <a class = "btn" href="{{ post.download }}">Download</a>
                                </div>
                            </div>
                        </div>
                        {% endfor %}
                    </div>
                    <!--Latest Blog-->
                    <div style="float: right; width: 20%;border: 1px solid white;">
                        {% for post in site.categories.Blog limit:1 %}
                        <a href = "{{ post.url }}" class="btn2">
                            <div style="align-items: center; display: inline-block; justify-content: center;">
                                <div>
                                    <img style = "width: 400px; object-fit: contain; border: 1px solid white;" src = "{{ post.card }}"/>
                                </div>
                                <div style = "display: flex; flex-direction: column; ">
                                    <p class="blogdate">{{ post.date | date: "%d %B %Y" }}</p>
                                    <h3 style="justify-content: center; margin-left: auto; margin-right: auto;">{{ post.title }}</h3>  
                                    <p style="height: 100%;">{{ post.content | strip_html | truncatewords: 50 }}</p>
                                </div>
                            </div>
                        </a>
                        {% endfor %}
                    </div>
                </div>
            </div>
            </div>
            <!--Recent Posts-->
                <div style="display: flex; margin-left: 50px;">
                    <ul>
                    {% assign postCount = 0 %}
                    {% for post in site.posts %}
                    {% if postCount < 5 %}
                    {% unless post == site.categories.Blog[0] or post == site.categories.Project[0] %}
                        {% assign postCount = postCount | plus: 1 %}
                        <!--Latest Project-->
                        <div class = 'blogpost' style = "border: 1px solid white; width: 320px; margin-right: 20px; height: 220px; display: inline-block; ">
                            <a href = "{{ post.url }}" style="text-align: center;">
                                <img style = "width:400px; object-fit: contain;" src = "{{ post.card }}"/>
                                <h3 style = "text-overflow: inherit;">{{ post.Title | truncate: 22}}</h3>
                                <!--<p class="blogdate">{{ post.date | date: "%d %B %Y" }}</p>-->
                            </a>
                        </div>
                    {% endunless %}
                    {% endif %}
                    {% endfor %}
                    </ul>
                </div>
        </div>           
    </section>
    <!--About Section-->
    <section id = 'about'>
    </section>
    <!--Skills Section-->
    <section id = 'skills'>
    <div style="width:100%;">
        <h1 style="display: flex; flex-direction: column; justify-content: center; text-align: center;">-Skills-</h1>
        <div>
            <div class = 'skill'>
                <h2>&lt;Languages&gt;</h2>
                <ul>
                    <li><img class = "logo" src="/Resources/Icons/c.png" alt="C99" title="C99"></li>
                    <li><img class = "logo" src="/Resources/Icons/c++.png" alt="C++ 20" title="C++ 20"></li>
                    <li><img class = "logo" src="/Resources/Icons/cs.png" alt="C#" title="C#"></li>
                    <li><img class = "logo" src="/Resources/Icons/hlsl.png" alt="HLSL" title="High-Level Shader Language"></li>
                    <li><img class = "logo" src="/Resources/Icons/glsl.png" alt="GLSL" title="OpenGL Shading Language"></li>
                    <li><img class = "logo" src="/Resources/Icons/x8664.png" alt="x86/x64 ASM" title="x86 / x64 Assembly"></li>
                    <li><img class = "logo" src="/Resources/Icons/arm.png" alt="ARM ASM" title="ARM Assembly"></li>
                    <li><img class = "logo" src="/Resources/Icons/bash.png" alt="Bash" title="Bash Scripting"></li>
                </ul>
            </div>
            <div class = 'skill'>
                <h2>&lt;Technology&gt;</h2>
                <ul>
                    <li><img class = "logo" src="/Resources/Icons/opengl.png" alt="OpenGL" title="OpenGL"></li>
                    <li><img class = "logo" src="/Resources/Icons/dx11.png" alt="DirectX 11" title="DirectX 11"></li>
                    <li><img class = "logo" src="/Resources/Icons/dx12.png" alt="DirectX 12" title="DirectX 12"></li>
                    <li><img class = "logo" src="/Resources/Icons/vulkan.png" alt="Vulkan" title="Vulkan"></li>
                    <li><img class = "logo" src="/Resources/Icons/cuda.png" alt="CUDA" title = "NVidia CUDA"></li>
                    <li><img class = "logo" src="/Resources/Icons/unrealengine4.png" alt="Unreal Engine 4" title="Unreal Engine 4"></li>
                    <li><img class = "logo" src="/Resources/Icons/unity.png" alt="Unity Enigne" title="Unity Engine"></li>
                </ul>
            </div>
            <div class = 'skill'>
                <h2>&lt;Tools&gt;</h2>
                <ul>
                    <li><img class = "logo" src="/Resources/Icons/vs22.png" alt="Visual Studio 2022" title="Visual Studio 2022"></li>
                    <li><img class = "logo" src="/Resources/Icons/vim.png" alt="Vim" title="Vim"></li>
                    <li><img class = "logo" src="/Resources/Icons/maya.png" alt="Autodesk Maya" title="Autodesk Maya"></li>
                    <li><img class = "logo" src="/Resources/Icons/git.png" alt="Git" title="Git"></li>
                    <li><img class = "logo" src="/Resources/Icons/cmake.png" alt="CMake" title="CMake"></li>
                    <li><img class = "logo" src="/Resources/Icons/nsight.png" alt="Nsight" title="NVidia NSight Profiler"></li>
                    <li><img class = "logo" src="/Resources/Icons/pix.png" alt="PIX" title="Microsoft PIX Profiler"></li>
                    <li><img class = "logo" src="/Resources/Icons/renderdoc.png" alt="RenderDoc" title="RenderDoc"></li>
                </ul>
            </div>
        </div>
    </div>
    </section>
    <!--Timeline Section-->
    <section id = 'timeline'>
        <div style="width:100%;">
             <!--Git Commit Activity-->
            <div id="feed" style="margin-top:40px;margin-bottom:40px; margin-left: 80px; margin-right: 80px;">GITHUB FEED</div>x
            <h1 style="display: flex; flex-direction: column; justify-content: center; text-align: center;">-Timeline-</h1>
            <div style="display: flex; flex-direction: row;">
                <div style="display: flex; flex: 3.5; flex-direction: column;">
                    <div>   <!--Timeline-->
                        <ul class = 'tl'>
                            <li class = 'event' data-date='>2018' style="color: white; font-size: 20px;">
                                <h2>BTECH Games Technology</h2>
                                <h3>Confetti Insititute of Creative Technologies [DDM]</h3>
                                <p>Confetti was my first step into the games industry. Focusing on the basic skills required for any game developer.</p>
                                <ul>
                                    <li>Principles of Game Design and The Development Pipeline</li>
                                    <li>3D Modelling in Autodesk Maya</li>
                                    <li>Scripting in C# for Unity, and Blueprints for Unreal Engine 4</li>
                                </ul>
                            </li>
                            <li class = 'event' data-date='>2020' style="color: white; font-size: 20px;">
                                <h2>MCOMP Computer Science for Games</h2>
                                <h3>Sheffied Hallam University - [2:1]</h3>
                                <p>I am studying various specialist topics as part of a 5 year intergated master's</p>
                                <ul>
                                    <li>Advanced C++ Programming</li>
                                    <li>Mathematics for 3D Graphics</li>
                                    <li>Low Level System Architecture</li>
                                    <li>PS4 / PS5 Console Development</li>
                                </ul>
                            </li>
                            <li class = 'event' data-date='>2025' style="color: white; font-size: 20px;">
                                <h2>...</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            <div style="display: inline-block; flex: 2;">
                <div style="margin: 15px;">
                    <h3 style = "border: 1px solid white; color: white; padding: 5px;">A Computing student at Sheffield Hallam University, Focusing on C++ Programming. I've been studying Game Development since 2018, and specialize in Computer Graphics, Software Optimisation and Cross-platform Development.
                    <br><br>
                    I also study Japanese, currently JLPT grade N4 - I am currently working towards N3 certification for the end of 2024. このページは日本語で読んでみたったら、最上の「EN/日本ご」ボタンを打ちてください!</h3>
                </div>
            </div>
        </div>
    </section>
    </body>
        <script src="/assets/script/flickity.pkgd.min.js" type="text/javascript"></script>
        <script src = "/assets/script/index.js" type="text/javascript"></script>
        <script src="/assets/script/gl-matrix.js" type="text/javascript"></script>
        <script src="/assets/script/sitedemo.js" type="text/javascript"></script>
        <script src="https://kit.fontawesome.com/daf7b09e3b.js" crossorigin="anonymous" type="text/javascript"></script>
        <script src="/assets/script/fullscreen.js" type="text/javascript"></script>
</html>
