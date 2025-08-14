'use client'
import { useRef } from "react";

export default function CardCarousel() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10"
      >
        ◀
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll scrollbar-hide scroll-smooth gap-4 px-10"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="min-w-[250px] h-40 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl"
          >
            Card {i + 1}
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10"
      >
        ▶
      </button>
    </div>
  );
}
