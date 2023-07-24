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

export { APIReturn, Course, Experience, Project, Technology };
