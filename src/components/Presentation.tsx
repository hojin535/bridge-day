"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PresentationProps {
  slides: React.ComponentType[];
}

export default function Presentation({ slides }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950 text-white">
      {/* Navigation Controls (Optional, for mouse users) */}
      <div className="absolute bottom-8 right-8 z-50 flex gap-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Container */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <CurrentSlideComponent key={currentSlide} />
      </AnimatePresence>

      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300"
        style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
      />
    </div>
  );
}
