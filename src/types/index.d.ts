type APIReturn = {
  response: 200 | 401;
};

type Course = {
  name: string;
  url: string;
  date: string;
  description: string[];
};

type Experience = {
  location: string;
  url: string;
  positions: Position[];
};

type Position = {
  name: string;
  date: string;
  description: string[];
};

type Project = {
  name: string;
  fileName: string;
  github: string;
  demo: string;
  date: string;
  skills: string[];
  summary: string;
  description: string[];
};

type Technology = {
  label: string;
  url: string;
  svg: string;
  isSkill: boolean;
  isFilter: boolean;
};

type pngFile =
  | "c4me"
  | "city"
  | "organ"
  | "portfolio"
  | "portrait"
  | "portraitTransparent"
  | "speedbot"
  | "spotifysorter";

type svgFile =
  | "audacity"
  | "blender"
  | "csharp"
  | "css"
  | "defmethod"
  | "email"
  | "git"
  | "github"
  | "grid"
  | "html"
  | "java"
  | "javascript"
  | "jquery"
  | "linkedin"
  | "list"
  | "nodejs"
  | "phaser"
  | "photoshop"
  | "python"
  | "react"
  | "sbu"
  | "sql"
  | "tailwindcss"
  | "typescript"
  | "unity"
  | "vite"
  | "web";

type Asset = PNG | SVG;

export { APIReturn, Course, Experience, Project, Technology, pngFile, svgFile, Asset };
