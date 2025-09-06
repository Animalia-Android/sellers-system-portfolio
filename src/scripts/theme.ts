(() => {
  const saved = localStorage.getItem('ds.theme');
  const prefersLight = window.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches;
  const theme = saved ?? (prefersLight ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', theme);
})();
