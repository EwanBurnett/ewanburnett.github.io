---
title: Projects
permalink: /projects/
layout: default
---

<h1>Projects</h1>
<body>
    <section id = 'Projects'>
        <link rel = 'stylesheet' href = '/assets/css/pagestyle.css'>
        <div class = 'wrapper'>
            <div>
                <h2>Personal Projects</h2>
                {% for post in site.categories.Personal %}
                <li>
                <a href="{{ post.url }}">
                    <div>
                        <h4>{{ post.date }}</h4>
                        <h3>{{ post.title }}</h3>
                    </div>
                    <div>
                        <img src = "{{ post.thumbnail }}" style = "width:300px; height:155px;">
                    </div>
                </li>
                {% endfor %}
            </div>
            <div>
                <h2>GameJams</h2>
                {% for post in site.categories.GameJam %}
                <li>
                <a href="{{ post.url }}">
                    <div>
                        <h4>{{ post.date }}</h4>
                        <h3>{{ post.title }}</h3>
                    </div>
                    <div>
                        <img src = "{{ post.thumbnail }}" style = "width:300px; height:155px;">
                    </div>
                </li>
                {% endfor %}
            </div>
            <div>
                <h2>University Coursework</h2>
                {% for post in site.categories.Coursework %}
                <li>
                <a href="{{ post.url }}">
                    <div>
                        <h4>{{ post.date }}</h4>
                        <h3>{{ post.title }}</h3>
                    </div>
                    <div>
                        <img src = "{{ post.thumbnail }}" style = "width:300px; height:155px;">
                    </div>
                </li>
                {% endfor %}
            </div>
        </div>
    </section>
</body>

