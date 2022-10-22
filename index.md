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
                    <button class = "b0" onClick = "window.location.href='#'" >EN/日本語</button>
                </div>
                <!--Site Intro-->
                <div style = "position: relative; margin: 10px;  margin-top: 30%;">
                    <h1>Hi, I'm Ewan - A Graphics Programmer</h1>
                    <button style="display: flex" class = 'b0' onClick = "window.location.href='#projects'">See what I can do </button>
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
                    <div class="slide" id = 'project1'><a href = '#'>Catalyst</a></div>
                    <div class="slide" id = 'project2'><a href = '#'>Atlas Engine</a></div>
                    <div class="slide" id = 'project3'><a href = '#'>GBA Emulator</a></div>
                    <div class="slide" id = 'project4'><a href = '#'>Runic</a></div>
                </div>  
                </div>
                <div>
                    <div style="padding-top:1%; display:block;" id='desc_project1'>
                        <h2 style="display: flex; flex-direction: column; justify-content: center; text-align: center;">Catalyst</h2>
                        <p style="display: flex; flex-direction: column; justify-content: center; text-align: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis quam in eros molestie elementum. Fusce rhoncus nisi et est volutpat, id sodales arcu consectetur. Mauris scelerisque aliquam est.</p>
                    </div>
                    <div style="padding-top:1%; display:none;" id='desc_project2'>
                        <h2 style="display: flex; flex-direction: column; justify-content: center; text-align: center;">Atlas Engine</h2>
                        <p style="display: flex; flex-direction: column; justify-content: center; text-align: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis quam in eros molestie elementum. Fusce rhoncus nisi et est volutpat, id sodales arcu consectetur. Mauris scelerisque aliquam est.</p>
                    </div>
                    <div style="padding-top:1%; display:none;" id='desc_project3'>
                        <h2 style="display: flex; flex-direction: column; justify-content: center; text-align: center;">GBA Emulator</h2>
                        <p style="display: flex; flex-direction: column; justify-content: center; text-align: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis quam in eros molestie elementum. Fusce rhoncus nisi et est volutpat, id sodales arcu consectetur. Mauris scelerisque aliquam est.</p>
                    </div>
                    <div style="padding-top:1%; display:none;" id='desc_project4'>
                        <h2 style="display: flex; flex-direction: column; justify-content: center; text-align: center;">Runic</h2>
                        <p style="display: flex; flex-direction: column; justify-content: center; text-align: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis quam in eros molestie elementum. Fusce rhoncus nisi et est volutpat, id sodales arcu consectetur. Mauris scelerisque aliquam est.</p>
                    </div>
                </div>
            </div>
                    <h2>Latest</h2>
            <!--Git Commit Activity-->
            <div id="feed" style="margin-top:40px;margin-bottom:40px; margin-left: 80px; margin-right: 80px;">GITHUB FEED</div>
            <!--Project Subnavigation Bar-->
            <div class = 'projectSubnav' style="margin-top:40px;margin-bottom:40px; margin-left: 80px; margin-right: 80px;">
                    {% for post in site.posts limit:1 %}
                    <!--Latest Post-->
                    <div class = 'blogpost' style="align-items: center;
  display: flex;
  justify-content: center; margin-bottom: 30px;">
                        <div style=" margin: 15px 15px 15px 15px;">
                            <img src = "{{ post.card }}"/>
                        </div>
                        <div style = "display: flex; flex-direction: column;">
                            <h3>{{ post.title }}</h3>  
                            <p class="blogdate">{{ post.date | date: "%d %B %Y" }}</p>
                            <p>{{ post.summary }}</p>
                            <div>
                                <ul style = "margin-top: auto; color: white;">
                                <a class = "btn" href = "{{ post.repository }}">Repo</a>
                                <a class = "btn" href = "{{ post.download }}">Download</a>
                                <a class = "btn" href = "{{ post.url }}">Blog</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {% endfor %}
                    <h3>Recent Projects</h3>
                    <!--Recent Posts-->
                    <div style="align-items: center; display: flex; justify-content: center; margin: auto;">
                    <ul class='blogposts'>
                    {% for post in site.posts limit:8 offset:1 %}
                    <!--Latest Post-->
                    <div class = 'blogpost' style = "border: 1px solid white; margin: 1px 15px 40px 15px; padding: auto; width: 300px; height: 205px; display: inline-block; text-align: center;">
                        <a href = "{{ post.url }}">
                            <img src = "{{ post.thumbnail }}"/>
                            <h3>{{ post.title }}</h3>
                            <!--<p class="blogdate">{{ post.date | date: "%d %B %Y" }}</p>-->
                        </a>
                    </div>
                    {% endfor %}
                    </ul>
                    </div>
                </div>
        </div>
    </section>
    <!--About Section-->
    <section id = 'about'>
        <div style="width:100%;">
            <h1 style="display: flex; flex-direction: column; justify-content: center; text-align: center;">-About Me-</h1>
            <div>
                <img class = 'promoimage' href = "https://dummyimage.com/400x600/9fa19c/fff.png&text=Promo+Image+(400x600)">
            </div>
            <div>
            <div style="margin-top:40px;margin-bottom:40px; margin-left: 180px; margin-right: 180px;">
                <p style = "border: 1px solid white;">Currently a student at Sheffield Hallam University, I am a proficient programmer, mainly focused on the C++ language. I've been a specialist game development student since 2018. I am passionate about graphics and software optimisation, and have experience in parallel software architecture using Vectorisation, threads and Compute. In the future, I'd like to break into either Graphics or Tools programming. I'm also a Japanese student, currently working towards my JLPT N3 certification.</p>
            <a class = 'btn' href = '/Resources/Ewan Burnett CV 2021-2022.pdf' target = "_blank">CV / Resumé</a>
            </div>
            </div>
        </div>
    </section>
    <!--Skills Section-->
    <section id = 'skills'>
    <div style="width:100%;">
        <h1 style="display: flex; flex-direction: column; justify-content: center; text-align: center;">-Skills-</h1>
        <div>
            <div class = 'skill'>
                <h2>&lt;Languages&gt;</h2>
                <ul>
                    <li><img class = "logo" src="/Resources/Icons/c.png" alt="C99"></li>
                    <li><img class = "logo" src="/Resources/Icons/c++.png" alt="C++ 20"></li>
                    <li><img class = "logo" src="/Resources/Icons/cs.png" alt="C#"></li>
                    <li><img class = "logo" src="/Resources/Icons/hlsl.png" alt="HLSL"></li>
                    <li><img class = "logo" src="/Resources/Icons/glsl.png" alt="GLSL"></li>
                    <li><img class = "logo" src="/Resources/Icons/x8664.png" alt="x86/x64 ASM"></li>
                    <li><img class = "logo" src="/Resources/Icons/arm.png" alt="ARM ASM"></li>
                    <li><img class = "logo" src="/Resources/Icons/bash.png" alt="Bash"></li>
                </ul>
            </div>
            <div class = 'skill'>
                <h2>&lt;Technology&gt;</h2>
                <ul>
                    <li><img class = "logo" src="/Resources/Icons/dx11.png" alt="DirectX 11"></li>
                    <li><img class = "logo" src="/Resources/Icons/dx12.png" alt="DirectX 12"></li>
                    <li><img class = "logo" src="/Resources/Icons/vulkan.png" alt="Vulkan"></li>
                    <li><img class = "logo" src="/Resources/Icons/cuda.png" alt="CUDA"></li>
                    <li><img class = "logo" src="/Resources/Icons/unrealengine4.png" alt="Unreal Engine 4"></li>
                    <li><img class = "logo" src="/Resources/Icons/unity.png" alt="Unity Enigne"></li>
                </ul>
            </div>
            <div class = 'skill'>
                <h2>&lt;Tools&gt;</h2>
                <ul>
                    <li><img class = "logo" src="/Resources/Icons/vs22.png" alt="Visual Studio 2022"></li>
                    <li><img class = "logo" src="/Resources/Icons/vim.png" alt="Vim"></li>
                    <li><img class = "logo" src="/Resources/Icons/maya.png" alt="Autodesk Maya"></li>
                    <li><img class = "logo" src="/Resources/Icons/git.png" alt="Git"></li>
                    <li><img class = "logo" src="/Resources/Icons/cmake.png" alt="CMake"></li>
                    <li><img class = "logo" src="/Resources/Icons/nsight.png" alt="Nsight"></li>
                    <li><img class = "logo" src="/Resources/Icons/pix.png" alt="PIX"></li>
                    <li><img class = "logo" src="/Resources/Icons/renderdoc.png" alt="RenderDoc"></li>
                </ul>
            </div>
        </div>
    </div>
    </section>
    <!--Timeline Section-->
    <section id = 'timeline'>
        <div style="width:100%;">
            <h1 style="display: flex; flex-direction: column; justify-content: center; text-align: center;">-Timeline-</h1>
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
                        <h3>Sheffied Hallam Univesrity - [2:1]</h3>
                        <p>During my 5 years at Sheffield Hallam University, I am studying various specialist topics.</p>
                        <ul>
                            <li>Advanced C++ Programming</li>
                            <li>Mathematics for 3D Graphics</li>
                            <li>Low Level System Architecture</li>
                            <li>PS4 Console Development</li>
                        </ul>
                    </li>
                    <li class = 'event' data-date='>2025' style="color: white; font-size: 20px;">
                        <h2>...</h2>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </body>
            <script src="/assets/script/flickity.pkgd.min.js"></script>
        <script src = "/assets/script/index.js"></script>
        <script src="/assets/script/gl-matrix.js"></script>
        <script src="/assets/script/sitedemo.js"></script>
        <script src="https://kit.fontawesome.com/daf7b09e3b.js" crossorigin="anonymous"></script>
        <script src="/assets/script/fullscreen.js"></script>
</html>
