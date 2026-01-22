export interface TProjectSchema {
  title: string;
  type: string;
  description: string;
  live: string;
  github: string;

  summary: string[];

  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    cloud: string[];
  };

  role: string[];
  features: string[];
  challenges: { problem: string; solution: string }[];
  tools: string[];
}
