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
    </head>
    <body>
        <section id = 'home'>
            <div class="pagewrapper">    <!--class = 'main'-->
                <div class = 'sitedemo'>
                    <!--Embed WebGl mini-project here-->
                    <canvas id = 'demoCanvas' width = '1280' height = '720'></canvas>
                    <script src="/assets/script/gl-matrix.js"></script>
                    <script src="/assets/script/sitedemo.js"></script>
                </div>
                <div class = 'tagline'>
                    <h1>Hi, I'm Ewan - A Graphics Programmer</h1>
                    <button class = 'demo' onClick = "window.location.href='#portfolio'">See what I can do </button>
                    <br/>
                    <img class = "tagimage" src = "Resources/SiteDemo/Thumbnail.png"/>
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
                    <h3 style = 'text-align: center;'>My Development Journey manifests itself in Game Projects, Applications, and Academic Works</h3>
                    <div class = 'works'>
                        <h2>Games</h2>
                        <!--<img src = "Resources/Icons/Game.jpg"/>-->
                        <div>
                            <ul><a href = '#'><h3>Game 1</h3></a></ul>
                            <ul><a href = '#'><h3>Game 2</h3></a></ul>
                            <ul><a href = '#'><h3>Game 3</h3></a></ul>
                        </div>
                        <h2>Applications</h2>
                        <div>
                            <ul><a href = '#'><h3>Application 1</h3></a></ul>
                            <ul><a href = '#'><h3>Application 2</h3></a></ul>
                            <ul><a href = '#'><h3>Application 3</h3></a></ul>
                        </div>
                        <h2>Academic Work</h2>
                        <div>
                            <ul><a href = '#'><h3>Coursework 1</h3></a></ul>
                            <ul><a href = '#'><h3>Coursework 2</h3></a></ul>
                            <ul><a href = '#'><h3>Coursework 3</h3></a></ul>
                        </div>
                    </div>
                    <a href = '/projects/'>Take a look at my other works</a>
                </div>            
            </div>
        </section>
        <section id="skills">
       <div class = 'pagewrapper'>
            <h1 class = 'title'>Skills</h1>
            <div class = 'tech'>
                <div class = 'skill'>
                    <h2>Programming</h2>
                    <div class = 'column'>
                        <h4>Languages</h4>
                        <div class = 'row'>C / C++ </div>
                        <div class = 'row'>C# </div>
                        <div class = 'row'>HLSL / GLSL </div>     
                        <div class = 'row'>x86 Assembly </div>    
                        <div class = 'row'>GO </div>                   
                    </div>
                    <div class = 'column'>
                        <h4>Technologies</h4>
                        <div class = 'row'>DirectX 11 </div>
                        <div class = 'row'>DirectX 12</div>
                        <div class = 'row'>Vulkan </div>     
                        <div class = 'row'>CUDA </div>    
                        <div class = 'row'>OpenCV </div>      
                        <div class = 'row'>SQL </div>      
                    </div>
                </div>
                <div class = 'skill'>
                    <h2>Tools</h2>
                    <ul>
                        <li>Visual Studio</li>
                        <li>Git</li>
                        <li>NVidia NSight</li>
                        <li>Pix Profiler</li>
                        <li>Unreal Engine 4</li>
                        <li>Unity Engine</li>
                        <li>Jira</li> 
                        <li>Adobe Photoshop</li>
                    </ul>
                </div>
                <div class = 'skill'>
                    <h2>Strengths</h2>
                    <ul>
                        <li>Low-level Software Optimization</li>
                        <li>Game Engine Architecture</li>
                        <li>Library Development</li>
                        <li>Parallelisation</li>
                        <li>Software Engineering</li>
                        <li>Project Management</li>
                        <li>Augmented Reality Applications</li>
                        <li>Web Development</li>
                    </ul>
                </div>
            </div>
            <div class = 'timeline'>
            <h2>Timeline</h2>
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
       <section id = "details">
       <div class = 'pagewrapper'>
            <h1 class = 'title'>About Me</h1>
            <div class = 'about'>
                        <img class = 'promoimage' href = "https://dummyimage.com/400x600/9fa19c/fff.png&text=Promo+Image+(400x600)">
                    <div>
                        <div id = 'intro'>
                            <div id = 'summary'>
                                <h2>Ewan Burnett</h2>
                                <p>
                                I am an adept programmer and software developer - mainly rooted in C/C++, but also proficient in C#, HLSL and x86 ASM. I've used this knowledge to learn frameworks like DirectX 11 - which enable me to engineer efficient graphical applications. Though I'm rooted in Game Development, my skills are applicable across the board.
                                </p>
                                <p>I've been studying Game Development since 2018 - during which I have participated in multiple game jams, tested games for local studios, and worked on personal projects. </p>
                                <p>
                                Looking forwards, my aspiration is to break into the games industry professionally- focusing on tool and game engine development, and creating development environments for Augmented and Virtual reality platforms. 
                                </p>
                                <a class = 'resumebutton' href = '/Resources/Ewan Burnett CV 2021-2022.pdf' target = "_blank">CV / Resumé</a>
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
            </div>
        </div>
       </section>
       <script src="/assets/script/flickity.pkgd.min.js"></script>
       <script src="/assets/script/fullscreen.js"></script>
    </body>
</html>
