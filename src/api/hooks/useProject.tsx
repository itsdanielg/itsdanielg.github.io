import { useEffect, useState } from "react";

export function useProject(fileName: string) {
  const [thumbnail, setThumbnail] = useState("");
  const [slideshow, setSlideshow] = useState<String[]>([]);
  const [video, setVideo] = useState("");

  useEffect(() => {
    setThumbnail(`/images/${fileName}.png`);
    setVideo(`/videos/${fileName}.mp4`);
  }, [fileName]);

  return { thumbnail, video };
}
