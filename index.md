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
            <div class="pagewrapper">    <!--class = 'main'-->
                <div class = 'sitedemo'>
                    <!--Embed WebGl mini-project here-->
                    <canvas id = 'demoCanvas' width = '1280' height = '720'></canvas>
                    <script src="/assets/gl-matrix.js"></script>
                    <script src="/assets/sitedemo.js"></script>
                </div>
                <div class = 'tagline'>
                    <h1>Hi, I'm Ewan - A Graphics Programmer</h1>
                    <button class = 'demo' onclick = 'RunDemo()'>See what I can do</button>
                </div>
            </div>
        </section>
        <section id="portfolio">
            <div class = 'pagewrapper'> 
                <h1 class = 'title'>Portfolio</h1>
                <div class="showreel js-flickity" data-flickity='{ "wrapAround": true, "autoPlay":true, "fullscreen":true, "cellselector":".slide" }'>
                    <div class="slide" id = 'project1'><a href = '#'>Project 1</a></div>
                    <div class="slide" id = 'project2'><a href = '#'>Project 2</a></div>
                    <div class="slide" id = 'project3'><a href = '#'>Project 3</a></div>
                    <div class="slide" id = 'project4'><a href = '#'>Project 4</a></div>
                </div>    
                <div class = 'project'>
                    <h2>Projects</h2>
                    <h3 style = 'text-align: center;'>Between Gamejams, University Coursework and Personal Projects, I have plenty of work to show off </h3>
                    <div class = 'works'>
                        <div>
                            <h2>GameJams</h2>
                            <a href = '#'><ul>GameJam 1</ul></a>
                            <a href = '#'><ul>GameJam 2</ul></a>
                            <a href = '#'><ul>GameJam 3</ul></a>
                        </div>
                        <div>
                            <h2>Personal</h2>
                            <a href = '#'><ul>Personal 1</ul></a>
                            <a href = '#'><ul>Personal 2</ul></a>
                            <a href = '#'><ul>Personal 3</ul></a>
                        </div>
                        <div>
                            <h2>Coursework</h2>
                            <a href = '#'><ul>Coursework 1</ul></a>
                            <a href = '#'><ul>Coursework 2</ul></a>
                            <a href = '#'><ul>Coursework 3</ul></a>
                        </div>
                    </div>
                    <a href = '/projects/'>Take a look at my other works</a>
                </div>            
            </div>
        </section>
       <section id = "details">
       <div class = 'pagewrapper'>
            <h1 class = 'title'>About Me</h1>
            <div class = 'about'>
                    <div class = 'promoimage'></div>
                    <div id = 'intro'>
                        <div id = 'summary'>
                            <h2>Ewan Burnett</h2>
                            <p>I've been studying Game Development for 4 years now - during which I have participated in multiple game jams, tested games for local studios, and worked on personal projects. </p>
                            <p>
                            I am an adept programmer and software developer - mainly rooted in C/C++, but also proficient in C#, HLSL and x86 ASM. I've used this knowledge to learn frameworks like DirectX 11 - which enable me to engineer efficient graphical applications. Though I'm rooted in Game Development, my skills are applicable across the board.
                            </p>
                            <p>
                            Looking forwards, my aspiration is to break into the games industry professionally- focusing on tool and game engine development, and creating development environments for Augmented and Virtual reality platforms. 
                            </p>
                            <a href = '/assets/Ewan Burnett CV 2021 _ 2022.pdf'>CV / Resumé</a>
                        </div>
                        <div class="contact">
                            <div id = 'email'>
                                <h3>Email Me</h3>
                                <a href = 'mailto:ewanburnettsk@outlook.com'>EwanBurnettSK@outlook.com</a>
                            </div>
                            <div id = 'social'>
                                <h3>Social Media</h3>                            
                                    <a href = 'https://github.com/ewanburnett'>Github</a>
                                    <a href = 'https://www.linkedin.com/in/ewanburnettsk'>Linkedin</a>
                                    <a href = 'https://twitter.com/strikerdev_'>Twitter</a>                            
                            </div>
                        </div>
                    </div>
            </div>
           </div>
       </section>
       <section id="skills">
       <div class = 'pagewrapper'>
            <h1 class = 'title'>Skills</h1>
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
                        <li>Adobe Photoshop</li>
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
                        <li>Game Framework Development</li>
                        <li>Augmented Reality Applications</li>
                        <li>Web Development</li>
                        <li>Working with Compute Shaders</li>
                        <li>Low-level Software Optimization</li>
                    </ul>
                </div>
            </div>
            <div class = 'timeline'>
            <h2>Where I've been</h2>
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
    </body>
</html>

