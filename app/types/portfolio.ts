// Centralized type definitions for consistency across components

export interface Project {
  id: string;
  title: string;
  role: string;
  metric: string;
  // Using functional component type for Lucide icons
  icon: any;
  description: string;
  stack: string[];
  link: string;
}

export interface Experience {
  range: string;
  company: string;
  role: string;
  detail: string;
}

export interface SkillCategory {
  [key: string]: string[];
}

export interface CommandItem {
  id: string;
  label: string;
  icon: any;
  action: () => void;
  group: "Navigation" | "Actions";
}
