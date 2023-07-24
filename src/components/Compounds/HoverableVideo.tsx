import HoverVideoPlayer from "react-hover-video-player";
import { Image } from "../Atoms/Image";

interface HoverableVideoProps {
  video: string;
  thumbnail: string;
}

export function HoverableVideo({ video, thumbnail }: HoverableVideoProps) {
  return (
    <HoverVideoPlayer
      className="w-full h-full"
      videoSrc={video}
      pausedOverlay={
        <Image
          className="w-full h-full object-cover"
          src={thumbnail}
        />
      }
    />
  );
}
