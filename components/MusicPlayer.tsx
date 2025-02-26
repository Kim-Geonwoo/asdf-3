import React, { useEffect, useRef } from "react";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";

import "react-h5-audio-player/lib/styles.css"; // 기본 스타일 임포트
import { useMusicStore } from "../store/musicStore";

interface MusicPlayerProps {
  track: string;
  displaySkipControls?: boolean; // skip 버튼 표시 여부 (PopupPlayer에서만 true로 전달)
}

const trackSources: Record<string, string> = {
  summerdance: "/tracks/summerdance.mp3",
  "hello-wake_up_buddy": "/tracks/hello-wake_up_buddy.mp3",
  "lets_feel-a-brunch_day": "/tracks/lets_feel-a-brunch_day.mp3",
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

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  track,
  displaySkipControls = false,
}) => {
  const { currentTrack, setCurrentTrack } = useMusicStore();
  const prevTrackRef = useRef(currentTrack);

  useEffect(() => {
    if (prevTrackRef.current !== track) {
      setCurrentTrack(track);
      prevTrackRef.current = track;
    }
  }, [track, setCurrentTrack]);

  const audioSrc = trackSources[track] || `/tracks/${track}.mp3`;
  const trackImg = `/images/track_img/${track}.webp`;

  // 순서대로 정의한 트랙 목록
  const trackList = [
    "summerdance",
    "hello-wake_up_buddy",
    "lets_feel-a_brunch_day",
    "4o4_love_in_me",
    "i_think-fixed my_4o4_error",
    "i_think-i_cant_fix_my_4o4_error",
    "i_think-just_alone",
    "why_so",
    "keep_falling",
    "i_want-refresh_my_life",
    "and-just_going",
  ];
  const currentIndex = trackList.findIndex((t) => t === track);

  const handlePrevTrack = () => {
    if (currentIndex > 0) {
      const prevTrack = trackList[currentIndex - 1];

      setCurrentTrack(prevTrack);
    }
  };

  const handleNextTrack = () => {
    if (currentIndex < trackList.length - 1) {
      const nextTrack = trackList[currentIndex + 1];

      setCurrentTrack(nextTrack);
    }
  };

  return (
    <>
      <div className="w-[30rem] h-fit bg-black  rounded-lg shadow-lg p-4">
        <div className="flex items-center">
          <Image
            alt=""
            className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"
            height={64}
            quality={60}
            src={trackImg}
            width={64}
          />
          <div className="ml-4 text-center">
            <p className="font-bold text-gray-100">
              지금 재생중: {track.charAt(0).toUpperCase() + track.slice(1)}
            </p>
            <p className="text-sm text-gray-200">작곡가 - 김거누</p>
          </div>
        </div>
        <div className="mt-4">
          <AudioPlayer
            customVolumeControls={[]} // 기본 음량 컨트롤 대체 가능
            showSkipControls={displaySkipControls} // Popup에서만 skip 버튼 표시
            src={audioSrc}
            onClickNext={
              displaySkipControls
                ? (e) => {
                    e.preventDefault();
                    handleNextTrack();
                  }
                : undefined
            }
            onClickPrevious={
              displaySkipControls
                ? (e) => {
                    e.preventDefault();
                    handlePrevTrack();
                  }
                : undefined
            }
            onPlay={(_e) => {
              setCurrentTrack(track); // 재생 시 현재 트랙 업데이트
            }}
          />
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
