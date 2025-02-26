import { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Spotify Sorter",
    asset: "spotifysorter",
    github: "https://github.com/itsdanielg/Spotify-Sorter",
    demo: "https://spotify-sorter-tau.vercel.app/",
    date: "January 2023 - Present",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    summary:
      "Advanced sorting app for Spotify playlist tracks, enabling sorting beyond native options (title, artist, album, etc.)",
    description: [
      "Advanced sorting app for Spotify playlist tracks, enabling sorting beyond native options (title, artist, album, etc.)",
      "Utilized React Query caching to reduce Spotify Web API calls and avoid rate limits",
      "Integrated CI/CD pipeline with GitHub Actions for automated testing, builds, and deployments to Vercel"
    ]
  },
  // {
  //   name: "FOUND:IT",
  //   asset: "foundit",
  //   github: "https://github.com/itsdanielg/c4me",
  //   demo: "https://danieljedrylgarcia.me/found-it/#/",
  //   date: "October 2021 - Present",
  //   technologies: ["JavaScript", "React", "Express", "SQL"],
  //   summary: "Inventory tracker that records and searches for the appearance and last seen details of certain items.",
  //   description: [
  //     "A simple inventory tracker that records and searches for the appearance, location, and last seen details of certain items",
  //     "Was designed as a fun, personal application due to constantly misplacing items"
  //   ]
  // },
  {
    name: "c4me: College 4 Me",
    asset: "c4me",
    github: "https://github.com/itsdanielg/c4me",
    demo: "https://itsdanielg.github.io/c4me/#/",
    date: "January 2020 - May 2020",
    technologies: ["JavaScript", "Java", "SQL", "React", "jQuery"],
    summary:
      "Assists upcoming undergraduate students' college planning through a recommendation of colleges and universities based on documented grades and test scores.",
    description: [
      "Full-stack web application that assists upcoming undergraduate students on their college planning through a recommendation of colleges and universities based on documented grades and test scores",
      "Collaborated within a team of 4 engineering students where I was responsible for a majority of the front-end development and UI/UX design",
      "Served as the final group project for the Software Engineering course over the Spring 2020 semester, where I was responsible for a majority of the front-end and UI/UX design"
    ]
  },
  {
    name: "Boardwalk Hall Auditorium Organ",
    asset: "organ",
    github: "https://github.com/itsdanielg/Virtual-Organ-Project/releases/",
    demo: "https://boardwalk-hall-organ.firebaseapp.com/",
    date: "January 2020 - May 2020",
    technologies: ["C#", "Unity", "Blender", "Photoshop", "Audacity"],
    summary: "3D-Simulator of a pipe organ based on the real-life instrument found in the Boardwalk Hall Auditorium.",
    description: [
      "3D-Simulator of a pipe organ based on the real-life instrument found in the Boardwalk Hall Auditorium located in Atlantic City, NJ",
      "Created as a research project for Unity-based applications during the Spring 2020 semester",
      "Served as a finalist during Stony Brook University's 16th Annual Game Programming competition"
    ]
  },
  {
    name: "Speedbot",
    asset: "speedbot",
    github: "https://github.com/itsdanielg/CSE-381-Group-Project/releases",
    demo: "https://speed-bot.firebaseapp.com/",
    date: "August 2019 - May 2020",
    technologies: ["C#", "Unity", "Blender", "Photoshop", "Audacity"],
    summary:
      "3D-Platform game in which the player must navigate through various obstacles, powerups, and enemies to complete each level as fast as possible.",
    description: [
      "3D-Platform game in which the player must navigate through various obstacles, powerups, and enemies to complete each level as fast as possible",
      "Served as a finalist during Stony Brook University's 16th Annual Game Programming competition"
    ]
  },
  {
    name: "The Tail of a City",
    asset: "city",
    github: "https://github.com/itsdanielg/CSE-380-Group-Project",
    demo: "https://the-tail-of-a-city.firebaseapp.com/",
    date: "January 2019 - May 2019",
    technologies: ["JavaScript", "Phaser", "Photoshop", "Audacity"],
    summary: "2D-Adventure game where the player must complete certain quests in each level as a playable dog.",
    description: [
      "2D-Adventure game where the player must complete certain quests in each level as a playable dog",
      "Collaborated within a team of 3 engineering students where I was responsible for the gameplay objective and logic"
    ]
  }
];
