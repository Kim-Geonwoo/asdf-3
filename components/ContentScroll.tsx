import React from "react";

import MusicPlayer from "@/components/MusicPlayer";
import InfiniteScroll from "@/components/lib/InfiniteScroll";

export const ContentScroll: React.FC = () => {
  const items = [
    { content: <MusicPlayer track="summerdance" /> },
    { content: <MusicPlayer track="summerdance" /> },
    { content: <MusicPlayer track="summerdance" /> },
    { content: <MusicPlayer track="summerdance" /> },
  ];

  return (
    <div className="h-[780px] w-full">
      <InfiniteScroll
        autoplay={true}
        autoplayDirection="up"
        autoplaySpeed={0.08}
        isTilted={true}
        items={items}
        pauseOnHover={true}
        tiltDirection="left"
      />
    </div>
  );
};
