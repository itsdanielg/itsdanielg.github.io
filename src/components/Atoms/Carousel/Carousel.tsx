import { ComponentType } from "react";
import { useState, useEffect, useRef } from "react";

export interface CarouselProps<T> {
  content: T[];
  element: ComponentType<T>;
  className?: string;
}

export function Carousel<T>({ content, element: Element, className = "" }: CarouselProps<T>) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const threshhold = container.scrollWidth / 2 + 8;
    const animate = () => {
      if (!isHovered) container.scrollLeft += 0.5;
      else container.scrollLeft += 0;

      if (container.scrollLeft >= threshhold) {
        container.scrollLeft = 0.0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div
      className={`${className} w-full p-4 bg-stone-600 rounded-lg overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        ref={containerRef}
        className="overflow-scroll">
        <div className="flex items-center gap-4">
          {[...content, ...content].map((elem, index) => (
            <Element
              key={index}
              {...elem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
