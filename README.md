<h1 align="center">lzx</h1>

<p align="center">A personal website</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-orange"/>
  <img src="https://img.shields.io/badge/Powered%20by-Vanilla-blue"/>
</p>

## Tech Stacks

- Language: **HTML + CSS + JavaScript**
- Font: **Roboto Mono** (Google Fonts)
- Icons: **Lucide** (SVG)
- Animation: **Typed.js**
- Deployment: **GitHub Pages**

## Pages

- **Home** — About me, GitHub stats, tech stack
- **Blog** — Personal blog posts
- **Projects** — Auto-fetches GitHub repos via API and displays as cards
- **List** — Media collection with auto-fetched covers

## Features

- GitHub API integration (repo list, stats)
- Socialify preview images for project cards
- Cover auto-fetch (IMDb JSONP → Wikipedia API fallback)
- localStorage cache for covers (no repeat API calls)
- Manual cover URL override per item
- Responsive layout (mobile 640px breakpoint)
- Dark theme

## List Cover Priority

1. Manual URL (`item.image` in data)
2. IMDb (suggestion API, no key needed)
3. Wikipedia (REST API + search fallback)
4. Gradient placeholder

## Acknowledgements

- Website design inspired by [zephyrlin.me](https://github.com/eurooooo/zephyrlin.me) — thanks **Zephyr** for the great reference and blog card design.
- Background image and gradient designed by **Zephyr**.
- Covers fetched from **IMDb** and **Wikipedia** APIs.
