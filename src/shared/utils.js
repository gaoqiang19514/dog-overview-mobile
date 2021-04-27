export const px2hd = (px) => {
  if (window.px2hd) return window.px2hd(px);

  if (!px) return 0;

  const ONE_REM =
    parseInt(document.documentElement.style.fontSize || '100', 10) || 100;
  const SCALE = ONE_REM / 100;

  return Number((px * SCALE).toFixed(1));
};
