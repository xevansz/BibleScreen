<div align="center">

  <img src="icon.svg" width="80" height="80" alt="BibleScreen Logo" />

  # BibleScreen

  **A distraction-free Telugu Bible slideshow & verse presenter.**

  [![Live Site](https://img.shields.io/badge/Live-bible.kinderjoyverse.com-c8a96e?style=for-the-badge&logoColor=white)](https://bible.kinderjoyverse.com)
  [![Host](https://img.shields.io/badge/Host-GitHub%20Pages-22272e?style=for-the-badge)](https://pages.github.com)
  [![PWA](https://img.shields.io/badge/PWA-Installable-4b5563?style=for-the-badge)](manifest.json)

</div>

---

> *"నీ వాక్యము నా పాదములకు దీపమును, నా త్రోవకు వెలుగునై యున్నది."*  
> *"Your word is a lamp to my feet and a light to my path."*  
> — **కీర్తనలు / Psalm 119:105**

---

## What is it?
BibleScreen is a lightweight, projector-friendly web application designed for presenting Telugu Bible verses during church services, prayer fellowships, and personal meditation.

- **Distraction-Free UI**: Minimalist fullscreen slides formatted for projectors and displays.
- **Instant Navigation**: Swift book, chapter, and verse selection with recent history chips.
- **Presenter Controls**: Seamless navigation via arrow keys, spacebar, swipe gestures, or discreet floating buttons.
- **Keyboard Shortcuts**: `F` for fullscreen, `C` to toggle the control panel, `←` / `→` to step through verses.
- **PWA Ready**: Works as an installable web app across desktop and mobile devices with offline support.

---

## Installation & Setup

### Install as an App (PWA on Mobile)
Visit **[bible.kinderjoyverse.com](https://bible.kinderjoyverse.com)** on your phone:
- **Android (Chrome)**: Tap the menu (**⋮**) ➔ **Install app** (or **Add to Home screen**).
- **iOS (Safari)**: Tap the **Share** button ➔ **Add to Home Screen**.

Once installed, it runs in fullscreen standalone mode with offline support.

### Run Locally
Zero build steps required—built with pure HTML, CSS, and vanilla JavaScript.

```bash
# Clone the repository
git clone https://github.com/xevansz/BibleScreen.git
cd BibleScreen

# Serve locally with any static HTTP server
python3 -m http.server 8000
# or
npx serve .
```

Open `http://localhost:8000` in your browser.

---

## Access
Live web application:  
**[bible.kinderjoyverse.com](https://bible.kinderjoyverse.com)**

---

## Deployment
Hosted using **GitHub Pages**:

1. **Host Source**: GitHub Pages serves directly from the root of the `main` branch.
2. **Custom Domain**: Linked via the [`CNAME`](file:///home/preist/Documents/tubby/bible/CNAME) record pointing to `bible.kinderjoyverse.com`.
3. **DNS Configuration**:
   - `CNAME` record: `bible` ➔ `<github-username>.github.io`
   - Enforce HTTPS enabled in repository settings.
4. **Automated Publishing**: Pushes to `main` update the live site immediately.
