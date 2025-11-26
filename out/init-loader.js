// Load GSAP and initialize loader
(function() {
  // Load scripts in order
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Load GSAP scripts sequentially
  loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js')
    .then(() => loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/CustomEase.min.js'))
    .then(() => loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js'))
    .then(() => loadScript('/osmo/loader.js'))
    .catch(err => console.error('Error loading scripts:', err));
})();

