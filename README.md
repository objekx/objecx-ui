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
