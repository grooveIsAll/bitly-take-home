export interface SharedCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface RawCharacter extends SharedCharacter {
  episode: string[];
  type: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  created: string;
  url: string;
}

export interface FormattedCharacter extends SharedCharacter {
  origin: string;
  episodeCount: number;
  episodes: string[];
}

export type Character = FormattedCharacter | null;

export type Characters = FormattedCharacter[] | [];
