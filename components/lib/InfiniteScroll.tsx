import React, { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
// import { Observer } from "gsap/Observer"; // 삭제합니다.

// gsap.registerPlugin(Observer); // 삭제합니다.

interface InfiniteScrollItem {
  content: ReactNode;
}

interface InfiniteScrollProps {
  // ----- Layout / Style Props -----
  width?: string;
  maxHeight?: string;
  negativeMargin?: string;
  // ----- Items Prop -----
  items?: InfiniteScrollItem[];
  itemMinHeight?: number;
  // ----- Tilt Props -----
  isTilted?: boolean;
  tiltDirection?: "left" | "right";
  // ----- Autoplay Props -----
  autoplay?: boolean;
  autoplaySpeed?: number;
  autoplayDirection?: "down" | "up";
  pauseOnHover?: boolean;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  width = "30rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  items = [],
  itemMinHeight = 150,
  isTilted = false,
  tiltDirection = "left",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "down",
  pauseOnHover = false,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getTiltTransform = (): string => {
    if (!isTilted) return "none";

    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;
    if (items.length === 0) return;

    // 클라이언트 사이드에서만 gsap/Observer를 동적 import 합니다.
    import("gsap/Observer").then(({ Observer }) => {
      gsap.registerPlugin(Observer);

      const divItems = gsap.utils.toArray<HTMLDivElement>(container.children);

      if (!divItems.length) return;

      const firstItem = divItems[0];
      const itemStyle = getComputedStyle(firstItem);
      const itemHeight = firstItem.offsetHeight;
      const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
      const totalItemHeight = itemHeight + itemMarginTop;
      const totalHeight =
        itemHeight * items.length + itemMarginTop * (items.length - 1);

      const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

      divItems.forEach((child, i) => {
        const y = i * totalItemHeight;

        gsap.set(child, { y });
      });

      const observer = Observer.create({
        target: container,
        type: "wheel,touch,pointer",
        preventDefault: true,
        onPress: ({ target }) => {
          (target as HTMLElement).style.cursor = "grabbing";
        },
        onRelease: ({ target }) => {
          (target as HTMLElement).style.cursor = "grab";
        },
        onChange: ({ deltaY, isDragging, event }) => {
          const d = event.type === "wheel" ? -deltaY : deltaY;
          const distance = isDragging ? d * 5 : d * 10;

          divItems.forEach((child) => {
            gsap.to(child, {
              duration: 0.5,
              ease: "expo.out",
              y: `+=${distance}`,
              modifiers: {
                y: gsap.utils.unitize(wrapFn),
              },
            });
          });
        },
      });

      let rafId: number;

      if (autoplay) {
        const directionFactor = autoplayDirection === "down" ? 1 : -1;
        const speedPerFrame = autoplaySpeed * directionFactor;

        const tick = () => {
          divItems.forEach((child) => {
            gsap.set(child, {
              y: `+=${speedPerFrame}`,
              modifiers: {
                y: gsap.utils.unitize(wrapFn),
              },
            });
          });
          rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);

        if (pauseOnHover) {
          const stopTicker = () => rafId && cancelAnimationFrame(rafId);
          const startTicker = () => {
            rafId = requestAnimationFrame(tick);
          };

          container.addEventListener("mouseenter", stopTicker);
          container.addEventListener("mouseleave", startTicker);

          return () => {
            observer.kill();
            stopTicker();
            container.removeEventListener("mouseenter", stopTicker);
            container.removeEventListener("mouseleave", startTicker);
          };
        } else {
          return () => {
            observer.kill();
            rafId && cancelAnimationFrame(rafId);
          };
        }
      }

      return () => {
        observer.kill();
        if (rafId) cancelAnimationFrame(rafId);
      };
    });
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
    negativeMargin,
  ]);

  return (
    <>
      <style>
        {`
          .infinite-scroll-wrapper {
            max-height: ${maxHeight};
          }
  
          .infinite-scroll-container {
            width: ${width};
          }
  
          .infinite-scroll-item {
            height: ${itemMinHeight}px;
            margin-top: ${negativeMargin};
          }
        `}
      </style>
      <div ref={wrapperRef} className="infinite-scroll-wrapper">
        <div
          ref={containerRef}
          className="infinite-scroll-container"
          style={{
            transform: getTiltTransform(),
          }}
        >
          {items.map((item, i) => (
            <div key={i} className="infinite-scroll-item">
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
