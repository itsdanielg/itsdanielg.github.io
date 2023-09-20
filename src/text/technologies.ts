import { Technology } from "@/types";

const languages: Technology[] = [
  {
    label: "TypeScript",
    url: "https://www.typescriptlang.org/",
    asset: "typescript",
    isSkill: true,
    isFilter: true
  },
  {
    label: "JavaScript",
    url: "https://www.javascript.com/",
    asset: "javascript",
    isSkill: true,
    isFilter: true
  },
  {
    label: "HTML",
    url: "https://html.com/",
    asset: "html",
    isSkill: true,
    isFilter: false
  },
  {
    label: "CSS",
    url: "https://www.css3.info/",
    asset: "css",
    isSkill: true,
    isFilter: false
  },
  {
    label: "Python",
    url: "https://www.python.org/",
    asset: "python",
    isSkill: true,
    isFilter: true
  },
  {
    label: "Java",
    url: "https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html",
    asset: "java",
    isSkill: true,
    isFilter: true
  },
  {
    label: "C#",
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    asset: "csharp",
    isSkill: true,
    isFilter: true
  },
  {
    label: "SQL",
    url: "https://www.mysql.com/",
    asset: "sql",
    isSkill: true,
    isFilter: true
  }
];

const frameworks: Technology[] = [
  {
    label: "React",
    url: "https://react.dev/",
    asset: "react",
    isSkill: true,
    isFilter: true
  },
  {
    label: "jQuery",
    url: "https://jquery.com/",
    asset: "jquery",
    isSkill: false,
    isFilter: true
  },
  {
    label: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    asset: "tailwindcss",
    isSkill: true,
    isFilter: true
  },
  {
    label: "Vite",
    url: "https://vitejs.dev/",
    asset: "vite",
    isSkill: true,
    isFilter: true
  },
  {
    label: "Node.js",
    url: "https://nodejs.org/en",
    asset: "nodejs",
    isSkill: true,
    isFilter: true
  },
  {
    label: "Phaser",
    url: "https://phaser.io/",
    asset: "phaser",
    isSkill: false,
    isFilter: true
  },
  {
    label: "Git",
    url: "https://git-scm.com/",
    asset: "git",
    isSkill: true,
    isFilter: false
  }
];

const software: Technology[] = [
  {
    label: "Unity",
    url: "https://unity.com/",
    asset: "unity",
    isSkill: true,
    isFilter: true
  },
  {
    label: "Blender",
    url: "https://www.blender.org/",
    asset: "blender",
    isSkill: true,
    isFilter: true
  },
  {
    label: "Audacity",
    url: "https://www.audacityteam.org/",
    asset: "audacity",
    isSkill: false,
    isFilter: true
  },
  {
    label: "Photoshop",
    url: "https://www.adobe.com/products/photoshop.html",
    asset: "photoshop",
    isSkill: false,
    isFilter: true
  }
];

const technologies = [...languages, ...frameworks, ...software];

export { languages, frameworks, software, technologies };
