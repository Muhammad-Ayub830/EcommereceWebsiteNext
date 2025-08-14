'use client'
import { useRef, useState, useEffect } from "react";

export default function SnapCardCarousel() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkForScrollPosition = () => {
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    checkForScrollPosition();
    const slider = sliderRef.current;

    slider.addEventListener("scroll", checkForScrollPosition);
    window.addEventListener("resize", checkForScrollPosition);

    return () => {
      slider.removeEventListener("scroll", checkForScrollPosition);
      window.removeEventListener("resize", checkForScrollPosition);
    };
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10"
        >
          ◀
        </button>
      )}

      {/* Snap Scrolling */}
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll scrollbar-hide scroll-smooth gap-4 px-10 snap-x snap-mandatory"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="min-w-[250px] h-40 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl snap-start"
          >
            Card {i + 1}
          </div>
        ))}
      </div>

      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10"
        >
          ▶
        </button>
      )}
    </div>
  );
}
