---
title: Blog
permalink: /blog/
paginate_path: "/blog/"
show_excerpts: true
layout: blog
---
<h1>Development Blogs</h1>
Here are short Blogs detailing my various projects! 

<ul>
  {% for post in site .posts %}
    <li>
        <h3>
            <a href="{{ post.url }}">{{ post.title }}</a>
        </h3>
    </li>
  {% endfor %}
</ul>