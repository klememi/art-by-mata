# art by mata — painting portfolio

A fast, mobile-friendly portfolio website in Slovak (default) and English. Content (paintings, categories, the About page and site settings) is edited in **[Pages CMS](https://pagescms.org)**. Every save commits to GitHub and the site republishes automatically.

- **Built with:** [Astro](https://astro.build). Each painting photo is resized into small WebP versions, so phones download only what they need.
- **Pages:** Work (gallery with category filter) · painting detail · About · Contact. Slovak is the default at `/`; English lives at `/en/`.
- **Contact form:** [Web3Forms](https://web3forms.com) (free) emails messages to you. No server is needed.
- **Instagram:** links to [@art_by_mata](https://www.instagram.com/art_by_mata/), plus a small grid of paintings on the Contact page. Each painting can link to its own post.

---

## 1 · Put it on GitHub

1. Create a new repository on GitHub, e.g. `art_by_mata`. Make it **public**: free GitHub Pages needs a public repo.
2. Push this folder:

   ```bash
   cd art_by_mata
   git init -b main
   git add .
   git commit -m "Portfolio website"
   git remote add origin https://github.com/<your-username>/art_by_mata.git
   git push -u origin main
   ```

3. In the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. The **Deploy website** workflow runs. A minute later the site is live at `https://<your-username>.github.io/art_by_mata/`.

**Custom domain (optional):** add it under **Settings → Pages → Custom domain**. Links adjust automatically.

## 2 · Edit content with Pages CMS

1. Open **[app.pagescms.org](https://app.pagescms.org)** and sign in with GitHub.
2. Install the Pages CMS GitHub app for the `art_by_mata` repository, then open the repository.
3. The sidebar shows:
   - **Paintings:** add, edit or hide paintings. Upload the largest photo you have; the site makes the small copies.
   - **Categories:** e.g. Landscapes / Krajiny. *Order* sets their position in the filter.
   - **About page:** photo, bio, artist statement, CV (PDF), exhibitions, education.
   - **Site settings:** name, intro text, email, studio location, Instagram link, contact form key.
4. Click **Save**. The site updates about a minute later.

Every text has a Slovak and an English field (Slovak first). If one is empty, the other language is shown.

### The imported paintings
The 24 paintings from Instagram have **working titles** (e.g. *Maky*, *Karlov most za súmraku*) and categories chosen from the images. Rename them freely. Medium, size, year, price and status are empty; they appear on the website as soon as you fill them in. If **Status** is left empty, no status is shown.

## 3 · Connect the contact form

1. Go to **[web3forms.com](https://web3forms.com)**, enter the email address that should receive messages, and copy the **Access Key**.
2. In Pages CMS → **Site settings**, paste it into **Contact form key** and save.

Until a key is set, the form tells visitors to use email instead. Also fill in **Contact email** so that address is shown.

## Working locally (optional)

Requires Node.js 22+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build in dist/
```

## Where things live

| What | Where |
| --- | --- |
| Painting entries | `src/content/paintings/*.md` |
| Categories | `src/content/categories/*.md` |
| About page | `src/content/pages/about.md` |
| Site settings | `src/content/settings/site.json` |
| Uploaded images | `src/assets/media/` |
| CV / PDFs | `public/files/` |
| Button labels & fixed UI text (EN/SK) | `src/i18n.ts` |
| Pages CMS setup | `.pages.yml` |
| Deploy workflow | `.github/workflows/deploy.yml` |
