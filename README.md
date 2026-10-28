# Cinematic Personal Portfolio

A mobile-first, cinematic portfolio website built with plain HTML, CSS and JavaScript. It can be hosted free on GitHub Pages and does not need a database or build process.

## Files
- `index.html` — page content
- `style.css` — responsive styling and animations
- `script.js` — intro, scroll reveals, navigation, social links and personal details
- `images/` — add your own photos here

## Personalise it
1. Open `script.js`.
2. Edit the `PROFILE` values: `name`, `bio`, `email`, and social links.
3. Add your own photos to the `images` folder using these exact filenames:
   - `profile.jpg` — main portrait
   - `cover.jpg` — wide/secondary photo
   - `gallery-1.jpg`
   - `gallery-2.jpg`
   - `gallery-3.jpg`
4. You can use `.png` or `.webp` photos too, but if you do, update the matching `src` in `index.html`.
5. For best results use a portrait photo for `profile.jpg` and `gallery-1.jpg`, and landscape or portrait for the other images. Compress images before upload so the website loads quickly on mobile.

## Publish on GitHub Pages
1. Create a GitHub repository, for example `my-portfolio`.
2. Upload `index.html`, `style.css`, `script.js`, and the whole `images` folder to the repository root.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then click **Save**.
6. Wait for GitHub Pages to publish; the URL will appear on the Pages settings screen.

## Important notes
- This is a static site, so it needs no backend, database, or secret keys.
- The photo placeholders are intentional until you add the matching image files.
- Change `https://wa.me/91XXXXXXXXXX` to your WhatsApp number including country code, digits only.
- Replace the sample social links with your real profile URLs.
- Text and images are changed by editing files and pushing the changes to GitHub. There is no public admin panel or visitor-upload feature in this version.
- Google Fonts are loaded online; if offline, the page uses fallback fonts.
