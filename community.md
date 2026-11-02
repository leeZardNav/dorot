---
layout: page
title: קהילה ולמידה
eyebrow: איפה לומדים, נפגשים ומתחרים
lead: המקומות שבהם צלמות וצלמי משפחה בישראל לומדים את המקצוע, משתפים עבודות, מתחרים ומפרסמים את עצמם. רשימה חיה, שהקהילה מרחיבה.
permalink: /community/
---

{% assign t = site.data.taxonomy %}
{% assign eco = site.data.ecosystem %}
{% assign kinds = "school,lectures,community,facebook_group,award,directory,magazine,podcast,youtube" | split: "," %}

{% for k in kinds %}
  {% assign items = eco | where: "kind", k | sort: "name_he" %}
  {% if items.size > 0 %}
## {{ t.kinds[k] }}

<ul class="linklist">
{% for e in items %}
  <li>
    <strong><a href="{{ e.url }}" rel="noopener" target="_blank">{{ e.name_he }}</a>{% if e.name_en %} <span class="kind">{{ e.name_en }}</span>{% endif %}</strong>
    <span>{{ e.description_he }}</span>
  </li>
{% endfor %}
</ul>
  {% endif %}
{% endfor %}

## חסר כאן משהו?

קבוצה, בית ספר, פודקאסט או תחרות שאתם מכירים ולא מופיעים כאן? [הוסיפו אותם]({{ site.github_repo_url }}/edit/main/_data/ecosystem.yml) לקובץ `_data/ecosystem.yml`, או [פתחו Issue]({{ site.github_new_issue }}) ונוסיף.
