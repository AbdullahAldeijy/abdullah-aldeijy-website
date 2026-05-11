# How to Publish a New Article

## Quick Steps

1. Create a new file in `content/articles/your-slug.mdx`
2. Add frontmatter at the top:

```mdx
---
title: "Your Article Title"
description: "Short SEO description (1-2 sentences)"
date: "2026-05-10"
author: "Abdullah Aldeijy"
tags: ["Azure", "Cloud"]
cover: "/images/articles/your-cover.jpg"
published: true
---
```

3. Write your content in Markdown below the frontmatter
4. Add cover image to `public/images/articles/your-cover.jpg`
5. Commit and push:

```bash
git add .
git commit -m "post: your article title"
git push
```

6. Netlify auto-deploys in 2-3 minutes

## Markdown Cheatsheet

- **Headings**: `## H2`, `### H3`
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Code inline**: `` `code` ``
- **Code block**: triple backticks with language
- **Link**: `[text](url)`
- **Image**: `![alt](url)`
- **List**: `-` or `1.`
- **Table**: pipe-separated with `|`
- **Quote**: `> text`

## Tips

- Set `published: false` to hide a draft
- Use 1-3 tags max for clean UI
- Cover images: 1600x900 (16:9 ratio)
- Keep descriptions under 160 characters for SEO
