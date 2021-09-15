---
title: Projects
permalink: /projects/
layout: default
---

UNDER CONSTRUCTION

<div>
    {% for category in site.categories %}
        {% unless category == "Blog" %}
            <div class="project-collection">
                {% capture category_name %}{{ category | first }}{% endcapture %}
                <div id="#{{ category_name | slugize }}"></div>
                <p></p>
                <h3 class="category-head">{{ category_name }}</h3>
                <a name="{{ category_name | slugize }}"></a>
                {% for post in site.categories[category_name] %}
                    <article class="project"><a href="{{ post.url }}" ><img src="{{ post.thumbnail }}" />
                       <h4><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></h4>
                    </article>
                {% endfor %}
            </div>
        {% endunless %}
    {% endfor %}
</div>
