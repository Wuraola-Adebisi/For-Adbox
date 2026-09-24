export function HeroCarrier() {
  return (
    <div
      role="img"
      aria-label="Rotating 3D view of the AdBox carrier box with LED ad screens"
      className="relative aspect-[9/7] w-full max-w-[420px] sm:max-w-[520px] md:aspect-auto md:h-[480px] md:max-w-[640px]"
    >
      <iframe
        src="/carrier-360.html"
        title="AdBox carrier box, 3D view"
        aria-hidden="true"
        tabIndex={-1}
        scrolling="no"
        sandbox="allow-scripts"
        className="pointer-events-none absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
