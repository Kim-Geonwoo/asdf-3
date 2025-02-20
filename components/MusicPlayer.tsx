import React from "react";
import Image from "next/image";

interface MusicPlayerProps {
  track: string;
}

const trackSources: Record<string, string> = {
  summerdance: "/tracks/summerdance.mp3",
  "hello-Wake_up_buddy": "/tracks/hello-wake_up_buddy.mp3",
  "lets_feel-a_brunch_day": "/tracks/lets_feel-a_brunch_day.mp3",
  "4o4_love_in_me": "/tracks/4o4_love_in_me.mp3",
  "i_think-fixed my_4o4_error": "/tracks/i_think-fixed my_4o4_error.mp3",
  "i_think-i_cant_fix_my_4o4_error":
    "/tracks/i_think-i_cant_fix_my_4o4_error.mp3",
  "i_think-just_alone": "/tracks/i_think-just_alone.mp3",
  why_so: "/tracks/why_so.mp3",
  keep_falling: "/tracks/keep_falling.mp3",
  "i_want-refresh_my_life": "/tracks/i_want-refresh_my_life.mp3",
  "and-just_going": "/tracks/and-just_going.mp3",
};

const MusicPlayer: React.FC<MusicPlayerProps> = ({ track }) => {
  const audioSrc = trackSources[track] || `/tracks/audio_${track}.mp3`;
  const trackImg = `/images/track_img/${track}.webp`;

  return (
    <>
      <div className="w-[50rem] h-[130px] bg-black rounded-lg shadow-lg">
        <div className="flex items-center p-4">
          <Image
            alt={""}
            className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"
            height={64}
            quality={60}
            src={trackImg}
            width={64}
          />
          <div className="ml-4">
            <p className="font-bold">
              지금 재생중: {track.charAt(0).toUpperCase() + track.slice(1)}
            </p>
            <p className="text-sm text-gray-600">작곡가 - 김거누</p>
          </div>
        </div>
        <audio controls className="w-full mt-4">
          <source src={audioSrc} type="audio/mpeg" />
          <track kind="captions" />
          브라우저가 오디오 플레이어를 지원하지 않습니다.
        </audio>
      </div>
    </>
  );
};

export default MusicPlayer;
