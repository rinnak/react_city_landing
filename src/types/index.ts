export interface NavLink {
  id: number;
  label: string;
  href: string;
}

export interface City {
  name: string;
  description: string;
  population: number;
  image: string;
}
export interface Place {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Monument {
  id: number;
  name: string;
  description: string;
  image: string;
  year: number;
}

export interface HistoryFact {
  id: number;
  name: string;
  description: string;
}
