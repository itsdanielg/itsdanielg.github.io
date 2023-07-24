import { useEffect, useState } from "react";

export function useSVG(directory: string, fileName: string) {
  const [svg, setSVG] = useState("");

  useEffect(() => {
    const getSVG = async () => {
      const svgFile = `../assets/${directory}/${fileName}.svg`;
      import(/* @vite-ignore */ svgFile).then((module) => {
        setSVG(module.default);
      });
    };
    getSVG();
  }, []);

  return svg;
}
