import React from "react";
import Image from "next/image";

interface MusicPlayerProps {
  track: string;
}

const trackSources: Record<string, string> = {
  summerdance: "/tracks/summerdance.mp3",
  // 다른 트랙의 경우 추가로 매핑할 수 있습니다.
};

const MusicPlayer: React.FC<MusicPlayerProps> = ({ track }) => {
  const audioSrc = trackSources[track] || `/tracks/audio_${track}.mp3`;
  const trackImg = `/images/track_img/track_${track}.webp`;

  return (
    <>
    
    <div className="w-[50rem] h-[130px] bg-black rounded-lg shadow-lg">
      <div className="flex items-center p-4">
        <Image
          alt={""}
          className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"
          src={trackImg}
          width={64}
            height={64}
            quality={60}
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
