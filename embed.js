// embed.js
(() => {
  const CSS_PATH = "/velin-ui.css"; // adjust if you want to use /components/colors.css instead
  const COMPONENT_BASE = "/components/";

  // inject core stylesheet once
  function ensureStylesheet() {
    if (!document.getElementById("velin-ui-embed-css")) {
      const link = document.createElement("link");
      link.id = "velin-ui-embed-css";
      link.rel = "stylesheet";
      link.href = CSS_PATH;
      document.head.appendChild(link);
    }
  }
  ensureStylesheet();

  // Toast helper
  function createToast(message, type = "success", duration = 3000) {
    let container = document.querySelector(".velin-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "velin-toast-container";
      Object.assign(container.style, {
        position: "fixed",
        top: "16px",
        right: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: "9999",
        maxWidth: "360px",
        fontFamily: "JetBrains Mono, ui-monospace, monospace",
      });
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = `velin-toast ${type}`;
    Object.assign(toast.style, {
      background: "rgba(255,255,255,0.08)",
      padding: "12px 18px",
      borderRadius: "12px",
      backdropFilter: "blur(8px)",
      display: "flex",
      gap: "12px",
      alignItems: "center",
      color: "var(--text)",
      boxShadow: "0 30px 60px -10px rgba(0,0,0,.5)",
      fontSize: ".9rem",
      overflow: "hidden",
      position: "relative",
      opacity: "0",
      transition: "opacity .25s ease, transform .25s ease",
      fontFamily: "JetBrains Mono, ui-monospace, monospace",
    });
    if (type === "success") {
      toast.style.borderLeft = "4px solid #1eb854";
    } else if (type === "error") {
      toast.style.borderLeft = "4px solid #e24f4f";
    }
    toast.innerHTML = `<div style="flex:1;">${message}</div><button aria-label="close" style="background:none;border:none;cursor:pointer;font-size:1rem;opacity:.7;margin-left:8px;">&times;</button>`;
    container.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.opacity = "1";
    });
    const remove = () => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 300);
    };
    toast.querySelector("button").addEventListener("click", remove);
    setTimeout(remove, duration);
  }

  // expose global API
  window.Velin = window.Velin || {};
  window.Velin.showToast = createToast;

  // base class for fetching snippets
  class VelinSnippet extends HTMLElement {
    constructor(componentName) {
      super();
      ensureStylesheet();
      this.componentName = componentName;
      this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
      await this.load();
    }

    async load() {
      const url = `${COMPONENT_BASE}${this.componentName}.html`;
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("failed to fetch snippet");
        const html = await res.text();
        // inject the snippet inside a wrapper so styling applies
        this.shadowRoot.innerHTML = html;
      } catch (e) {
        // fallback: minimal default if snippet fails
        this.shadowRoot.innerHTML = `<div style="padding:8px;background:rgba(255,255,255,0.05);border-radius:6px;font-size:.85rem;">Failed to load ${this.componentName}</div>`;
        console.warn("Velin UI: could not load", url, e);
      }
    }
  }

  // Trigger
  class VelinTrigger extends VelinSnippet {
    constructor() {
      super("trigger");
    }
  }
  customElements.define("velin-trigger", VelinTrigger);

  // Card
  class VelinCard extends VelinSnippet {
    constructor() {
      super("card");
    }
  }
  customElements.define("velin-card", VelinCard);

  // Input
  class VelinInput extends VelinSnippet {
    constructor() {
      super("input");
    }
  }
  customElements.define("velin-input", VelinInput);

  // Float
  class VelinFloat extends VelinSnippet {
    constructor() {
      super("float");
    }
    connectedCallback() {
      super.connectedCallback();
      // allow programmatic show/hide if the float file includes structure expecting it
    }

    show() {
      const backdrop = this.shadowRoot.querySelector(".velin-float-backdrop");
      if (backdrop) {
        backdrop.classList.add("show");
        backdrop.style.visibility = "visible";
        backdrop.style.opacity = "1";
      }
    }
    hide() {
      const backdrop = this.shadowRoot.querySelector(".velin-float-backdrop");
      if (backdrop) {
        backdrop.style.opacity = "0";
        setTimeout(() => {
          backdrop.style.visibility = "hidden";
        }, 250);
      }
    }
  }
  customElements.define("velin-float", VelinFloat);

  // Toast declarative trigger
  class VelinToastTrigger extends HTMLElement {
    constructor() {
      super();
      ensureStylesheet();
    }
    connectedCallback() {
      const msg = this.getAttribute("message") || "";
      const type = this.getAttribute("type") || "success";
      const delay = parseInt(this.getAttribute("delay") || "0", 10);
      if (delay > 0) {
        setTimeout(() => createToast(msg, type), delay);
      } else {
        createToast(msg, type);
      }
    }
  }
  customElements.define("velin-toast", VelinToastTrigger);
})();
