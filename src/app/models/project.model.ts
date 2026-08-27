export type ProjectVisual =
  | {
      kind: "dashboard";
      alt: string;
    }
  | {
      kind: "image";
      src: string;
      alt: string;
    };

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  year: string;
  status: string;
  role: string;
  summary: string;
  impact: string;
  repositoryUrl: string;
  stack: string[];
  visual: ProjectVisual;
  detailVisual?: ProjectVisual;
  context: string[];
  problem: string[];
  architecture: {
    title: string;
    description: string;
  }[];
  features: string[];
  challenges: {
    title: string;
    problem: string;
    solution: string;
  }[];
  results: string[];
  learnings: string[];
  nextSteps?: string[];
};
