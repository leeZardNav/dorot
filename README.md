# דורות

**מדריך קהילתי פתוח לצלמות ולצלמי המשפחה של ישראל.**
צילומי משפחה, ילדים, גיל שנה, בת ובר מצווה, הריון, ניובורן, דורות ונשיות, בסטודיו ובאור טבעי, לפי אזור והתמחות.

האתר: https://leezardnav.github.io/dorot/

## למה

צלמות וצלמי משפחה הם כמעט תמיד עסק של אדם אחד שמפרסם בפייסבוק ובאינסטגרם. לא היה להם מקום אחד, בלי אינטרס מסחרי, שמסדר אותם לפי אזור ולפי התמחות. דורות הוא המקום הזה: אלפביתי, בלי דירוג, בלי פרסומות, ופתוח לעריכה.

## איך תורמים

- **בלי קוד:** [טופס הוספת צלם או צלמת](https://github.com/leeZardNav/dorot/issues/new/choose).
- **עם קוד:** עורכים את [`_data/photographers.yml`](_data/photographers.yml) ושולחים Pull Request.
- **תיקון טקסט:** בתחתית כל דף באתר יש "ערכו את הדף הזה".

המדריך המלא לתורמים, כולל מילון השדות: https://leezardnav.github.io/dorot/contribute/
ראו גם [CONTRIBUTING.md](CONTRIBUTING.md).

## מבנה המאגר

| נתיב | מה יש שם |
|---|---|
| `_data/photographers.yml` | כל הצלמות והצלמים, רשומה אחת לכל אחד |
| `_data/ecosystem.yml` | בתי ספר, קהילות, תחרויות ומדריכים |
| `_data/taxonomy.yml` | שמות האזורים, ההתמחויות וסגנונות התאורה |
| `index.html` | דף הבית: המדריך לפי אזור, עם חיפוש |
| `specialty/<key>/` ו-`region/<key>/` | דף קבוע לכל התמחות ולכל אזור |
| `spotlight.md` | נקודת המוצא: הפוסט והצלמת שמהם המדריך נולד |
| `community.md`, `contribute.md`, `about.md` | קהילה ולמידה, הצטרפות, אודות |
| `_layouts/`, `_includes/`, `assets/` | התבנית: עיצוב אחד, כרטיס אחד, קובץ CSS אחד |

האתר בנוי ב-[Jekyll](https://jekyllrb.com/) ומתפרסם אוטומטית ב-GitHub Pages מכל push ל-`main`. אין תהליך בנייה מקומי, אין תלויות JavaScript, אין שרת.

## הרצה מקומית (אופציונלי)

```sh
bundle install
bundle exec jekyll serve --livereload
```

ואז http://127.0.0.1:4000/dorot/

## רישיון

הקוד ברישיון [MIT](LICENSE). התוכן (הקבצים תחת `_data/` ודפי ה-Markdown) ברישיון [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.he).

---

## English summary

**Dorot** ("generations") is an open, community-maintained directory of Israel's family photographers: family, children, first birthday, bat/bar mitzvah, maternity, newborn, multi-generation and feminine portraiture, in studio and natural light, organised by region and specialty. The site is in Hebrew, the language of the community it serves.

It started as an experiment: take a single Facebook post by a family photographer from Rehovot and build, from that one link, a portal for everyone working in the same niche. An AI agent, directed by a human, identified the profession and sub-genre, mapped where these photographers publish, verified a first list of photographers across the country, and wrote this site. The community takes it from here.

- Content lives in one YAML file (`_data/photographers.yml`) and a handful of Markdown pages.
- Jekyll on GitHub Pages, no build pipeline, no JavaScript dependencies.
- Alphabetical, never ranked. Public business information only. Any photographer can ask to be removed, no questions asked.
- Code: MIT. Content: CC BY 4.0.
