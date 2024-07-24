export interface Card {
    id: number;
    title: string;
    cardInfo?: string;
    image?: string;
    demoLink?: string;
    technologies?: Array<string>;
    video?: string;
    GitHubLink?: string;
  }

export interface ProjectCardsProps {
    cards: Card[];
  }

export interface Project {
    title: string;
    dates: string;
    description: string;
    cards: Card[];
  }

export interface Technologies {
    [key: string]: string; 
  }
  
export interface CardPhotosStructure {
    TKinter: { [key: string]: string };
    Athlon: { [key: string]: string };
    Technologies: Technologies;
    CV: { [key: string]: string };
  }

  export interface VideoStructure {
    [key: string]: {
      [key: string]: string; 
    };
  }