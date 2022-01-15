---
title: Projects
permalink: /projects/
layout: projecthome
---

<h1>Projects</h1>
<body>
    <section id = 'Projects'>
        <link rel = 'stylesheet' href = '/assets/css/stylesheet.css'>
        <div class = 'wrapper'>
            <div>
                <h2>Personal Projects</h2>
                <h3>Projects developed in my own time</h3>
                <ul>
                {% for post in site.categories.Personal %}
                <li>
                    <a href="{{ post.url }}">
                        <div>
                            <h4>{{ post.date | date:"%A, %d %-b , %Y" }}</h4>
                            <h3>{{ post.title }}</h3>
                            <h3> {{ post.tags }} </h3>
                        </div>
                        <div>
                            <img src = "{{ post.thumbnail }}" style = "width:300px; height:155px;">
                        </div>
                        <h3><a href = "{{ post.repository }}">Repo</a></h3>
                    </a>
                </li>
                {% endfor %}
                </ul>
            </div>
            <div>
                <h2>University Coursework</h2>
                <h3>Projects done as a part of my University course.<h3>
                <ul>
                {% for post in site.categories.Coursework %}
                <li>
                    <a href="{{ post.url }}">
                        <div>
                            <h4>{{ post.date | date:"%A, %d %-b , %Y" }}</h4>
                            <h3>{{ post.title }}</h3>
                        </div>
                        <div>
                            <img src = "{{ post.thumbnail }}" style = "width:300px; height:155px;">
                        </div>
                    </a>
                </li>
                {% endfor %}
                </ul>
            </div>
            <div>
                <h2>Research Paper Implementations</h2>
                <h3>Demonstrating the concepts in various research papers.</h3>
                <ul>
                {% for post in site.categories.Research %}
                <li>
                    <a href="{{ post.url }}">
                        <div>
                            <h4>{{ post.date | date:"%A, %d %-b , %Y" }}</h4>
                            <h3>{{ post.title }}</h3>
                            <h3>{{ post.repository }}</h3>
                        </div>
                        <div>
                            <img src = "{{ post.thumbnail }}" style = "width:300px; height:155px;">
                        </div>
                        <ul>
                            <li><a href = "{{post.url}}"> </li>
                        </ul>
                    </a>
                </li>
                {% endfor %}
                </ul>
            </div>
        </div>
    </section>
</body>

