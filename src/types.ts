export interface Profile {
    id: number;
    email: string;
    githubLink: string;
    linkedinLink: string;
    resumeLink: string;
}

export interface Views {
    id: number;
    views: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    date: Date;
    type: string;
    views: string;
    repository?: string | null;
    url?: string | null;
    code?: string | null;
}