# Velin UI

Velin UI is a clean, lightweight, HTML-first design component library that requires **no JavaScript framework**.  
It is designed to be beginner-friendly while still providing a professional, Figma-level design experience.  
Use it directly in your projects with a single `<script>` tag or link to individual HTML/CSS snippets.

---

## Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Quick Start Example](#quick-start-example)
- [Using Components](#using-components)
- [Component List](#component-list)
- [Remote Snippet Usage](#remote-snippet-usage)
- [Customizing](#customizing)
- [Folder Structure](#folder-structure)
- [Design Tokens](#design-tokens)
- [License](#license)

---

## Overview

Velin UI delivers HTML and CSS components that can be used directly in any project without a JavaScript build system.  
It supports two primary usage modes:

1. **Embed Script (recommended)**  
   Load one JavaScript file (`embed.js`) which automatically injects the Velin UI stylesheet and registers all web components. You can then use custom HTML tags like `<velin-trigger>` anywhere in your page.

2. **Direct HTML/CSS Snippets**  
   Copy-paste or link to standalone HTML component files in `/components/` for fine-grained control without web components.

---

## Features

- HTML-first design system
- No dependency on React, Vue, or other frameworks
- Fully responsive components
- Consistent Velin design language
- Predefined CSS variables for easy theming
- Web components for zero-boilerplate usage
- Individual HTML/CSS files for standalone use
- Can be used with iframes, fetch injection, or copy-paste

---

## Getting Started

### Option 1 — Using the Embed Script

Add the following to your HTML:

```html
<script src="https://velin-ui.vercel.app/embed.js" defer></script>
```
Once loaded, you can use Velin UI components as custom HTML elements:
```html
<velin-trigger label="Click Me" highlighted></velin-trigger>
<velin-input placeholder="Search..."></velin-input>
<velin-card>
  <div style="font-weight:700;">Title</div>
  <div>Content here.</div>
</velin-card>
```
The embed script:

- Injects the shared Velin CSS

- Defines all web components

- Provides the global Velin helper object `(e.g., Velin.showToast())`.

---

### Option 2 — Using Standalone Snippets

Link to the component's HTML or CSS directly from the /components/ folder.

Example for a Trigger button:

```html
<link rel="stylesheet" href="https://velin-ui.vercel.app/components/colors.css">
<link rel="stylesheet" href="https://velin-ui.vercel.app/velin-ui.css">

<div>
  <!-- Paste from trigger.html -->
  <button class="velin-btn">Trigger</button>
  <button class="velin-btn highlighted">Highlighted</button>
</div>
```
Quick Start Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Velin UI Starter</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <script src="https://velin-ui.vercel.app/embed.js" defer></script>
</head>
<body style="background:#0f0f12; color:#f5f5f7; font-family:Inter,sans-serif; padding:2rem;">

  <h1>Welcome to Velin UI</h1>
  <p>A clean, HTML-based component library with no framework required.</p>

  <velin-trigger label="Default"></velin-trigger>
  <velin-trigger label="Highlighted" highlighted></velin-trigger>

  <velin-input placeholder="Search..."></velin-input>

  <velin-card>
    <div style="font-weight:700;">Example Card</div>
    <div>Body content goes here.</div>
  </velin-card>

  <velin-trigger label="Show Toast" onclick="Velin.showToast('Hello from Velin')"></velin-trigger>

</body>
</html>
```

#### Using Components
Web Component Attributes

All components share a clean attribute-based API:
`<velin-trigger>`

- `label` — Text inside the button

- `highlighted` — Applies Velin gradient styling

- `small` — Reduces padding and size

`<velin-input>`

- `placeholder` — Input placeholder text

- `type` — Input type (text, password, etc.)

`<velin-card>`

- Slot-based container for any HTML

`<velin-float>`

- `allow-dismiss` — Click outside to close

- `open` — Start open

`<velin-toast>`

- `message` — Text to display

- `type` — success or error

- `delay` — Time in milliseconds before showing

Component List

- Trigger — Pill-shaped button with normal or gradient styles.

- Input — Text input with focus ring and background hover effects.

- Card — Elevated container for grouping content.

- Float — Modal dialog with backdrop blur.

- Toast — Notification popup for success or error messages.

## Remote Snippet Usage

To load a component without the embed script:

Example:

```html
<div id="placeholder"></div>
<script>
fetch('https://velin-ui.vercel.app/components/trigger.html')
  .then(res => res.text())
  .then(html => document.getElementById('placeholder').innerHTML = html);
</script>
```

## Customizing

Velin UI uses CSS variables defined in /components/colors.css.

Example override:

```css
:root {
  --bg: #ffffff;
  --text: #000000;
  --gradient-velin: linear-gradient(135deg,#ff0000,#0000ff);
}
```

## Folder Structure

/
├─ embed.js                  # Defines web components and Velin helper API
├─ velin-ui.css              # Core styles for all components
├─ components/
│    ├─ trigger.html
│    ├─ card.html
│    ├─ float.html
│    ├─ input.html
│    ├─ toast.html
│    └─ colors.css
└─ index.html                # Main docs/demo page

## Design Tokens

A tokens.json file contains Velin's design primitives for tooling and automation:

```css
{
  "color": {
    "background": { "value": "#0f0f12" },
    "text": { "value": "#f5f5f7" },
    "gradient": { "value": ["#a3150d","#c75610","#c4a423","#0e567d","#a8439d"] }
  },
  "radius": { "base": { "value": "1rem" }, "pill": { "value": "999px" } },
  "shadow": { "elevated": { "value": "0 40px 100px -10px rgba(0,0,0,.6)" } }
}
```

---

License

Velin UI is released under the GNU General Public License. You are free to use it in personal and commercial projects.
Thank You, 
The Velin Guy, not team.
