<script>
  // Smooth copy feedback for future snippet embed (if used)
  document.addEventListener("click", e => {
    if (e.target.matches(".copy")) {
      const btn = e.target;
      const pre = btn.closest("pre");
      let codeEl = pre ? pre.querySelector("code") : null;
      if (!codeEl && btn.dataset.target) {
        codeEl = document.getElementById(btn.dataset.target);
      }
      if (!codeEl) return;
      navigator.clipboard.writeText(codeEl.innerText).then(() => {
        btn.classList.add("copied");
        const orig = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(() => {
          btn.textContent = orig || "Copy";
          btn.classList.remove("copied");
        }, 1200);
      });
    }
  });

  // Toast helper (you can expose this globally for snippet usage)
  window.showToast = function(message, type = "success", duration = 3000) {
    let container = document.querySelector(".objecx-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "objecx-toast-container";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = `objecx-toast ${type}`;
    toast.style.fontFamily = "JetBrains Mono";
    toast.innerHTML = `<div>${message}</div><button class="close" aria-label="close">&times;</button>`;
    container.appendChild(toast);
    const remove = () => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 300);
    };
    toast.querySelector(".close").addEventListener("click", remove);
    setTimeout(remove, duration);
  };
</script>
