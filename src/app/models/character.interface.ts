export interface Character {
  id: string;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  originPlanet: OriginPlanet;
  transformations: Transformation[];
}

export interface OriginPlanet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
}

export interface Transformation {
  id: number;
  name: string;
  image: string;
  ki: string;
}
