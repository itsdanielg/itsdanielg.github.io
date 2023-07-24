import { useEffect, useState } from "react";

export function useProject(fileName: string) {
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");

  useEffect(() => {
    const getImage = async () => {
      const imageFile = `../assets/images/projects/${fileName}.png`;
      import(/* @vite-ignore */ imageFile).then((module) => {
        setImage(module.default);
      });
    };
    const getVideo = async () => {
      const videoFile = `../assets/videos/${fileName}.mp4`;
      import(/* @vite-ignore */ videoFile).then((module) => {
        setVideo(module.default);
      });
    };
    getImage();
    getVideo();
  }, [fileName]);

  return { image, video };
}
