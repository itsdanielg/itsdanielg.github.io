type APIReturn = {
  error: boolean;
};

type Contact = {
  email: string;
  linkedin: string;
  github: string;
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
  asset: Image_File;
  github: string;
  demo: string;
  date: string;
  technologies: string[];
  summary: string;
  description: string[];
};

type Technology = {
  label: string;
  url: string;
  asset: SVG_File;
  isSkill: boolean;
  isFilter: boolean;
};

type Image_File =
  | "c4me"
  | "city"
  | "organ"
  | "portfolio"
  | "portrait"
  | "portraitTransparent"
  | "speedbot"
  | "spotifysorter";

type SVG_File =
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

export { APIReturn, Contact, Course, Experience, Project, Technology, Image_File, SVG_File };
