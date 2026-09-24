export function HeroCarrier() {
  return (
    <div
      role="img"
      aria-label="Rotating 3D view of the AdBox carrier box with LED ad screens"
      className="relative aspect-[9/7] w-full max-w-[500px] overflow-hidden sm:max-w-[620px] md:aspect-auto md:h-[560px] md:max-w-[760px]"
    >
      <iframe
        src="/carrier-360.html"
        title="AdBox carrier box, 3D view"
        aria-hidden="true"
        tabIndex={-1}
        scrolling="no"
        sandbox="allow-scripts"
        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.1] border-0 md:scale-[1.25]"
      />
    </div>
  );
}
