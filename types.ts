export interface Job {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface SkillNode {
  id: string;
  group: number;
  radius?: number;
}

export interface SkillLink {
  source: string;
  target: string;
  value: number;
}

export interface SkillData {
  nodes: SkillNode[];
  links: SkillLink[];
}