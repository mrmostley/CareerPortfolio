# Rahul Antony — Portfolio Site

## Quick Start (Deploy to Netlify)

### Option A: Drag & Drop (Fastest)
1. Go to https://app.netlify.com/drop
2. Drag the entire `portfolio` folder onto the page
3. Done — your site is live at `random-name.netlify.app`
4. Go to **Site settings → Domain management → Change site name** to set it to something like `rahulantony.netlify.app`

### Option B: Git Deploy (Recommended for ongoing edits)
1. Create a GitHub repo (e.g., `portfolio`)
2. Push this entire folder to the repo
3. Go to https://app.netlify.com → **Add new site → Import from Git**
4. Select your repo → Deploy
5. Every future `git push` auto-deploys

---

## 🎬 HOW TO UPDATE VIDEO LINKS

There are **2 files** with placeholder YouTube embeds that need updating:

### File 1: `index.html` (line ~approx 220)
Find this code:
```html
<!-- PLACEHOLDER: Replace this YouTube URL with your uploaded video -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
```
Replace `dQw4w9WgXcQ` with your actual YouTube video ID.

### File 2: `lit-tech.html` (line ~approx 140)
Find the same placeholder:
```html
<!-- PLACEHOLDER: Replace this YouTube URL with your uploaded Lit Tech journey video -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
```
Replace `dQw4w9WgXcQ` with your actual YouTube video ID.

### How to get the YouTube video ID:
1. Upload video to YouTube (unlisted is fine)
2. The URL will look like: `https://www.youtube.com/watch?v=ABC123XYZ`
3. The video ID is the part after `v=` → `ABC123XYZ`
4. Your embed URL becomes: `https://www.youtube.com/embed/ABC123XYZ`

### Search tip in your text editor:
- Open the file in Notepad or VS Code
- Press `Ctrl+H` (Find & Replace)
- Find: `dQw4w9WgXcQ`
- Replace with: your video ID
- Click Replace All

---

## File Structure

```
portfolio/
├── index.html              ← Main scroll page (hero, timeline, ONDC, Lit Tech, impact, press, contact)
├── ondc.html               ← ONDC deep-dive case study
├── lit-tech.html            ← Lit Tech deep-dive with dashboard embed
├── dashboard.html           ← Standalone sales analytics dashboard
├── netlify.toml             ← Netlify config
├── admin/                   ← (Future: Decap CMS)
└── assets/
    ├── docs/
    │   └── Rahul_Antony_CV_Mar2026.pdf
    └── images/
        ├── consumer-app/    ← LitApp ordering app screenshots (13 files)
        ├── delivery-app/    ← Delivery management app screenshots (8 files)
        ├── metrics/         ← Category split chart
        ├── third-party/     ← HHYS Inframart, Jeevani Sanjeevani screenshots
        └── slide24_img01.jpg ← Video thumbnail
```

## Contact Form

The contact form uses **Netlify Forms** (free). It works automatically when deployed on Netlify — no backend needed. Submissions appear in your Netlify dashboard under **Forms**.

## Custom Domain (Later)

1. Buy a domain (Namecheap, Google Domains, etc.)
2. In Netlify: **Site settings → Domain management → Add custom domain**
3. Follow the DNS instructions Netlify provides
4. HTTPS is auto-configured

## What to Edit

| What | Where | How |
|------|-------|-----|
| Hero tagline | `index.html` → `.hero h1` | Edit the text |
| Contact info | `index.html` → `#contact` section | Edit email, phone, etc. |
| CV file | Replace `assets/docs/Rahul_Antony_CV_Mar2026.pdf` | Same filename, or update links |
| Video embeds | `index.html` + `lit-tech.html` | See instructions above |
| Press links | `index.html` → `#press` section | Add/remove press-card divs |
| Dashboard data | `dashboard.html` → the `D = {...}` JSON | Update the data object |

## Future Enhancements

- [ ] Upload Lit Tech journey video to YouTube and update embed links
- [ ] Add Decap CMS for visual editing (`/admin` panel)
- [ ] Buy and connect custom domain
- [ ] Add Google Analytics or Netlify Analytics
- [ ] Add ONDC-related screenshots/visuals to the ONDC page
