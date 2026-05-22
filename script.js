(() => {

  const root = document.documentElement;

  let frame = 0;

  const setGlow = (x, y) => {

    root.style.setProperty('--glow-x', `${x}px`);

    root.style.setProperty('--glow-y', `${y}px`);

  };

  window.addEventListener(
    'pointermove',
    (event) => {

      if (frame) return;

      frame = window.requestAnimationFrame(() => {

        setGlow(event.clientX, event.clientY);

        frame = 0;

      });

    },
    { passive: true }
  );

  window.addEventListener('pointerleave', () => {

    setGlow(
      window.innerWidth * 0.72,
      window.innerHeight * 0.18
    );

  });

})();