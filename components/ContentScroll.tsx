import React from "react";

import MusicPlayer from "@/components/MusicPlayer";
import InfiniteScroll from "@/components/lib/InfiniteScroll";

export const ContentScroll: React.FC = () => {
  const items = [
    { content: <MusicPlayer track="summerdance" /> },
    { content: <MusicPlayer track="hello-wake_up_buddy" /> },
    { content: <MusicPlayer track="lets_feel-a_brunch_day" /> },
    { content: <MusicPlayer track="4o4_love_in_me" /> },
    { content: <MusicPlayer track="i_think-fixed my_4o4_error" /> },
    { content: <MusicPlayer track="i_think-i_cant_fix_my_4o4_error" /> },
    { content: <MusicPlayer track="i_think-just_alone" /> },
    { content: <MusicPlayer track="why_so" /> },
    { content: <MusicPlayer track="keep_falling" /> },
    { content: <MusicPlayer track="i_want-refresh_my_life" /> },
    { content: <MusicPlayer track="and-just_going" /> },
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
