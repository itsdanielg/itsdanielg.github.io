import { useState, useEffect } from "react";
import { Image_File } from "@/types";

export function useProject(project: Image_File) {
  const [thumbnail, setThumbnail] = useState<Image_File>(project);
  const [slideshow, setSlideshow] = useState<string[]>([]);
  const [video, setVideo] = useState("");

  useEffect(() => {
    setVideo(`/videos/${project}.mp4`);
  }, [project]);

  return { thumbnail, video };
}
