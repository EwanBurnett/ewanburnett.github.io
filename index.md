---
title: "Ewan Burnett"
layout: home
---

<html>
    <head>
        <meta charset="UTF-8">
        <meta name = 'viewport' content = 'width = device-width, initial-scale = 1.0'>
        <title>Portfolio</title>
        <link rel = 'stylesheet' href = 'assets/stylesheet.css'>
        <link rel="stylesheet" href="/assets/flickity.css" media="screen">
        <link rel="stylesheet" href="/assets/fullscreen.css" media="screen">
    </head>
    <body>
        <section id = 'home'>
            <div class="main">
                <h1>Hi, I'm Ewan - A Graphics Programmer</h1>
                <button class = 'demo'>See what I can do</button>
                <!--Embed WebGl mini-project here-->
                <canvas id = 'demoCanvas' width = '1280' height = '720'></canvas>
            </div>
        </section>
        <section id="portfolio">
            <h1>Portfolio</h1>
            <div class="showreel js-flickity" data-flickity='{ "wrapAround": true, "autoPlay":true, "fullscreen":true, "cellselector":".slide" }'>
                <div class="slide" id = 'project1'>proj1</div>
                <div class="slide" id = 'project2'>proj2</div>
                <div class="slide" id = 'project3'>proj3</div>
                <div class="slide" id = 'project4'>proj4</div>
              </div>
            <div class = 'project'>
                <h2>Project</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat suscipit sagittis. Nunc quis consequat tortor. Donec nec tortor ut odio pretium eleifend eu facilisis erat.</h3>
                <a href = '/projects/'>Take a look at my work</a>
            </div>
        </section>
       <section id = "details">
        <h1>About Me</h1>
           <div class = 'about'>
                <div class = 'promoimage'></div>
                <div id = 'intro'>
                    <h2>Ewan Burnett</h2>
                    <p>From a young age, I've been fascinated by games. I spent my teens captivated by these virtual worlds, which led to me deciding to pursue games as a career. </p>
                    <p>
                    Nunc urna tortor, convallis quis molestie vitae, iaculis non neque. In hac habitasse platea dictumst. Vestibulum malesuada sed quam in iaculis. Aliquam commodo pretium tincidunt. Nunc dolor arcu, aliquam sed accumsan a, egestas vel diam. Morbi finibus vulputate vestibulum. Nulla scelerisque magna augue, vel euismod felis sagittis vitae. Aliquam placerat pharetra sapien eget facilisis. Etiam eu odio tellus. Fusce in massa tincidunt, blandit dolor eu, feugiat urna. Praesent scelerisque ante accumsan velit tristique sagittis nec at nibh. Curabitur quis elementum sem, in bibendum felis. Aliquam semper, magna eget sagittis ornare, velit elit tincidunt tortor, et lacinia neque ex sed erat. Donec fringilla ultrices sapien at varius.
                    </p>
                    <a   href = '/assets/Ewan Burnett CV 2021 _ 2022.pdf'>CV / Resumé</a>
                    <div class="contact">
                        <h3>Email Me</h3>
                        <a href = 'mailto:ewanburnettsk@oulook.com'>EwanBurnettSK@oulook.com</a>
                        <br>
                        <h3>Socials</h3>
                        <ul>
                            <li><a href = 'https://github.com/ewanburnett'>Github</a></li>
                            <li><a href = 'https://www.linkedin.com/in/ewanburnettsk'>Linkedin</a></li>
                            <li><a href = 'https://twitter.com/strikerdev_'>Twitter</a></li>
                        </ul>
                        <br>
                    </div>
                </div>
           </div>
       </section>
       <section id="skills">
            <h1>Skills</h1>
            <div class = 'tech'>
                <div class = 'skill'>
                    <h2>Programming</h2>
                    <p>Adept at programming in various languages and technologies:</p>
                    <ul>
                        <li>C/C++</li>
                        <li>C#</li>
                        <li>HLSL</li>
                        <li>x86 ASM</li>
                        <li>DirectX 11</li>
                        <li>DirectX 12</li>
                        <li>Vulkan</li>
                        <li>OpenGL</li>
                        <li>LUA</li>
                        <li></li>
                    </ul>
                </div>
                <div class = 'skill'>
                    <h2>Tools</h2>
                    <p>Knowledgable in industry-standard tools and software</p>
                    <ul>
                        <li>Visual Studio</li>
                        <li>Git</li>
                        <li>Unreal Engine 4</li>
                        <li>Unity Engine</li>
                        <li>Photoshop</li>
                        <li>Trello</li>
                        <li>Autodesk Maya</li>
                        <li>Autodesk 3DS Max</li>
                    </ul>
                </div>
                <div class = 'skill'>
                    <h2>Application</h2>
                    <p>Practiced applying my skills in various contexts</p>
                    <ul>
                        <li>Project Management</li>
                        <li>Game Artificial Intelligence</li>
                        <li>Software Engineering</li>
                        <li>GameJams</li>
                    </ul>
                </div>
               <div class = 'timeline'>
                    <div>
                        <h3>Confetti Institute of Creative Technologies (2018 - 2020) | Distinction</h3>
                        <p>Student of Games Technology - covering gameplay programming, teamwork, 3d modelling, industry skills and leadership.</p>
                    </div>
                    <div>
                        <h3>Sheffield Hallam University (2020 - 2025)</h3>
                        <p>Master's Student in Computer Science for Games.</p>
                    </div>
               </div>
            </div>
       </section>
       <script src="/assets/flickity.pkgd.min.js"></script>
       <script src="/assets/fullscreen.js"></script>
       <script src="/assets/sitedemo.js"></script>
    </body>
</html>

