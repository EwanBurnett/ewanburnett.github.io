---
title: Projects
permalink: /projects/
layout: default
---

<h1>Projects</h1>
<body>
    <link rel = 'stylesheet' href = '/assets/css/pagestyle.css'>
    <div class = 'wrapper'>
        <div>
            <h2>Personal Projects</h2>
            {% for post in site.categories.Personal %}
            <li>
                <h4>{{ post.date }}</h4>
                <a href="{{ post.url }}">{{ post.title }}</a>
                <a href="{{ post.url }}"><img src = "{{ post.thumbnail }}" style = "width:300px; height:155px;"></a>
            </li>
            {% endfor %}
        </div>
        <div>
            <h2>GameJams</h2>
            {% for post in site.categories.GameJam %}
            <li>
                <h4>{{ post.date }}</h4>
                <a href="{{ post.url }}">{{ post.title }}</a>
                <a href="{{ post.url }}"><img src = "{{ post.thumbnail }}" style = "width:300px; height:155px;"></a>
            </li>
            {% endfor %}
        </div>
        <div>
            <h2>University Coursework</h2>
            {% for post in site.categories.Coursework %}
            <li>
                <h4>{{ post.date }}</h4>
                <a href="{{ post.url }}">{{ post.title }}</a>
                <a href="{{ post.url }}"><img src = "{{ post.thumbnail }}" style = "width:300px; height:155px;"></a>
            </li>
            {% endfor %}
        </div>
    </div>
</body>

