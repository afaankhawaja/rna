'use client'
import { useLayoutEffect, useRef, useState, useCallback } from "react";

const WORDS = ["RISING", "NEW", "ARABIA"];
const REFERENCE_SIZE = 200; // probe font-size, just needs to be big enough to measure accurately

// Compresses the font's built-in ascent/descent whitespace between rows.
// 1.0 = default line box (visible gap even with all-caps text).
// 0.75-0.85 = tight stacking. Tune per font — some fonts need lower/higher.
const LINE_HEIGHT = 0.64;

const GAP_PX = 55;

const MAX_OVERFLOW_FACTOR = 1.0;

const BackgroundText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const probeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [fontSize, setFontSize] = useState(0);
  const [repetitions, setRepetitions] = useState(1);

  const recalculate = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { width: containerWidth, height: containerHeight } =
      container.getBoundingClientRect();
    if (!containerWidth || !containerHeight) return;

    const metrics = probeRefs.current.map((probe) =>
      probe ? probe.getBoundingClientRect() : null
    );
    if (metrics.some((m) => !m || !m.width || !m.height)) return;

    // constraint 1: fit "ARABIA" perfectly so it doesn't leave a gap on the right.
    // other words might overflow and get cut on the right.
    const arabiaWidth = metrics[2]!.width;
    const scaleByWidth = containerWidth / arabiaWidth;

    // constraint 2: total stacked height
    const rowHeight = REFERENCE_SIZE * LINE_HEIGHT;
    const totalHeight = rowHeight * WORDS.length;
    const totalGap = GAP_PX * (WORDS.length - 1);
    const allowedHeight = containerHeight * MAX_OVERFLOW_FACTOR;
    const scaleByHeight = (allowedHeight - totalGap) / totalHeight;

    const isPortrait = containerHeight > containerWidth;
    let finalScale = Math.max(scaleByWidth, scaleByHeight);
    let reps = 1;

    if (isPortrait) {
      finalScale = scaleByWidth;
      const actualRowHeight = rowHeight * finalScale;
      // Calculate how many rows needed to fill containerHeight
      const neededRows = (containerHeight + GAP_PX) / (actualRowHeight + GAP_PX);
      reps = Math.max(1, Math.ceil(neededRows / WORDS.length));
    }

    setRepetitions(reps);
    setFontSize(REFERENCE_SIZE * finalScale);
  }, []);

  useLayoutEffect(() => {
    recalculate();

    const ro = new ResizeObserver(() => recalculate());
    if (containerRef.current) ro.observe(containerRef.current);

    document.fonts?.ready.then(recalculate);

    return () => ro.disconnect();
  }, [recalculate]);

  const displayWords = Array(repetitions).fill(WORDS).flat();

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0">
      <div
        ref={containerRef}
        className="absolute right-0 top-0 bottom-0 w-[95%] md:w-[90%] lg:w-[85%] overflow-hidden flex flex-col items-start justify-center text-white/8 uppercase font-mont font-bold"
        style={{ gap: `${GAP_PX}px` }}
      >
        {displayWords.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={`whitespace-nowrap tracking-tight font-bold ${word === 'NEW' ? 'self-end' : ''}`}
            style={{
              fontSize: fontSize ? `${fontSize}px` : 0,
              lineHeight: LINE_HEIGHT,
              visibility: fontSize ? "visible" : "hidden",
              paddingLeft: word === 'RISING' ? '0.8em' : '0',
            }}
          >
            {word}
          </span>
        ))}
      </div>

      {/* hidden probes — must share exact classes with real spans for accurate measurement */}
      <div
        aria-hidden
        style={{ position: "absolute", top: -99999, left: -99999, visibility: "hidden" }}
      >
        {WORDS.map((word, i) => (
          <span
            key={word}
            ref={(el) => { probeRefs.current[i] = el; }}
            className="uppercase font-mont tracking-tight whitespace-nowrap font-bold"
            style={{ 
              fontSize: REFERENCE_SIZE, 
              lineHeight: LINE_HEIGHT,
              paddingLeft: word === 'RISING' ? '0.8em' : '0',
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BackgroundText;