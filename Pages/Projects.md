---
title: Projects
permalink: /projects/
layout: projecthome
---

<h1 style="text-align: center; font-size: 54px; font-family: Arial, Helvetica, sans-serif; color: white;">Projects</h1>
<body>
    <section id = 'Projects'>
        <link rel = 'stylesheet' href = '/assets/css/stylesheet.css'>
        <div class = 'wrapper'>
            <!--Load all Project posts in a grid-->
            <div style="align-items: center; display: flex; justify-content: center; margin: auto;">
                <ul class="projects">
                {% for post in site.categories.Project %}
                    <div style="display: inline-block;">
                        <h4 style="margin-left: 15px; color: white; text-align:left;">{{ post.date | date:"%d/%m/%Y" }}</h4>
                        <div style = "border: 1px solid white; margin: 1px 15px 40px 15px; padding: auto; width: 300px; height: 205px; display: inline-block; text-align: center;">
                            <a href = "{{ post.url }}">
                                <img src = "{{ post.card }}" style = "width:320px; object-fit: contain;">
                                <h3 style = "text-overflow: inherit;">{{ post.title | truncate: 22}}</h3>
                            </a>
                        </div>
                    </div>
                {% endfor %}
                </ul>
            </div>        
        </div>
    </section>
</body>

