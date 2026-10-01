(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // Play once per tab session; storage restrictions do not affect the site.
  try {
    if (sessionStorage.getItem('splain-v2-intro-seen')) return;
    sessionStorage.setItem('splain-v2-intro-seen', '1');
  } catch (_) {}
  const intro = document.createElement('div');
  intro.className = 'studio-intro';
  intro.setAttribute('aria-hidden', 'true');
  intro.innerHTML = '<span class="studio-intro-logo">s.</span><span class="studio-intro-name">SPLAIN STUDIO</span><span class="studio-intro-line"></span><span class="studio-intro-note">IDEAS INTO POSSIBILITY.</span>';
  document.body.appendChild(intro);
  const removeIntro = () => {
    intro.remove();
    document.removeEventListener('keydown', removeIntro);
    document.removeEventListener('pointerdown', removeIntro);
  };
  // Dismiss immediately on interaction, including keyboard navigation.
  document.addEventListener('keydown', removeIntro);
  document.addEventListener('pointerdown', removeIntro);
  intro.addEventListener('animationend', event => {
    if (event.animationName === 'intro-exit') removeIntro();
  });
  window.setTimeout(removeIntro, 2200);
})();
