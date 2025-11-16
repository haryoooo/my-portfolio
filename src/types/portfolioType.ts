export interface Project {
  description: string;
  title: string;
  technology: string[];
  url?: string;
  type?: string;
  year?: string;
}

export interface Skill {
  icon: string;
  level: string;
  name: string;
}

export interface Education {
  degree: string;
  description: string;
  university: string;
  period: string;
}

export interface Certification {
  issuer: string;
  link: string;
  year: string;
  title: string;
}

export interface Language {
  proficiency: string;
  name: string;
}

export interface Experience {
  title?: string;
  company: string;
  period: string;
  icon?: string;
  description: string;
}

export interface PortfolioData {
  id: string;
  url_pdf: string;
  description: string;
  tooltip_projects: string;
  projects: Project[];
  url_linkedin: string;
  profile_img: string;
  skills: Skill[];
  citizen: string;
  contact_desc: string;
  education: Education[];
  url_github: string;
  certifications: Certification[];
  email: string;
  about: string;
  phone: string;
  occupation: string;
  name: string;
  languages: Language[];
  experience: Experience[];
}

