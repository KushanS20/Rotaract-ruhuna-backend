export interface Project {
  title: string;
  description: string;
  images: string[];
}

export interface Avenue {
  id: number;
  imageUrl: string;
  avenue: string;
  description: string;
  projects: Project[];
}

export interface Blog {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  readTime: string;
}

export interface Admin {
  fName: string;
  lName: string;
  clubIdNumber: string;
  StudentNumber: string;
  email: string;
  password: string;
}