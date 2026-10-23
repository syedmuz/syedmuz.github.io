# Resume website

Static site, no build step, no cost.

## Files
- `index.html` : layout and styling. Rarely needs editing.
- `data.js` : all your content. Edit this to add jobs, skills, projects, certifications.

## Add content
Open `data.js`, copy an existing `{ ... }` block inside a list, change the text, save, refresh the page.
Make a list empty (`projects: []`) to hide that section.
Project `tags` create the filter buttons automatically.

## Preview locally
Open `index.html` in a browser. No server needed.

## Publish free
**GitHub Pages**
1. Create a public repo named `<username>.github.io`.
2. Upload `index.html`, `data.js`, `README.md`.
3. Settings, Pages, Deploy from branch `main`, folder `/ (root)`.
4. Live at `https://<username>.github.io`.

**Cloudflare Pages**: connect the repo, leave build command empty, output directory `/`.

Every future update is: edit `data.js`, commit, and the site redeploys.
