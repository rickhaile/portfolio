export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
}

export interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}
