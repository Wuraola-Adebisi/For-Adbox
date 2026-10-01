export function HeroCarrier() {
  return (
    <div
      role="img"
      aria-label="Rotating 3D view of the adbox carrier box with LED ad screens"
      className="relative -mx-5 h-[345px] w-[calc(100%+2.5rem)] max-w-none sm:mx-0 sm:aspect-[9/7] sm:h-auto sm:w-full sm:max-w-[520px] md:aspect-auto md:h-[480px] md:max-w-[640px]"
    >
      <iframe
        src="/carrier-360.html"
        title="adbox carrier box, 3D view"
        aria-hidden="true"
        tabIndex={-1}
        scrolling="no"
        sandbox="allow-scripts"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[390px] w-[480px] max-w-none -translate-x-1/2 -translate-y-1/2 border-0 sm:inset-0 sm:h-full sm:w-full sm:translate-x-0 sm:translate-y-0 sm:top-0 sm:left-0"
      />
    </div>
  );
}
