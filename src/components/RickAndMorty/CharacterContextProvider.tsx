import { createContext, useState, useCallback } from "react";

import useCharacters from "./useCharacters";
import { getUniqRandomNumArray } from "../../helpers";
import {
  characterDataURL,
  favoriteCharactersIds,
  MAX_CHARACTERS,
} from "./helpers";

export const defaultCharacterContext = {
  characterData: [
    {
      id: 1,
      name: "Colossus",
      image: "https://rickandmortyapi.com/api/character/avatar/68.jpeg",
      status: "Dead",
      species: "Human",
      gender: "Male",
      origin: "Post-Apocalyptic Earth",
      episodeCount: 1,
      episodes: ["23"],
    },
  ],
  getRandomCharacters: () => {},
  loading: false,
  error: "",
};

export const CharacterContext = createContext<typeof defaultCharacterContext>(
  null!
);
const initUrl: string = characterDataURL(favoriteCharactersIds);

const CharacterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [query, setQuery] = useState(initUrl);
  const { characterData, loading, error } = useCharacters(query);

  const getRandomCharacters = useCallback(async () => {
    const randomCharacterIds: number[] = getUniqRandomNumArray(
      9,
      MAX_CHARACTERS
    );
    const randomCharactersUrl: string = characterDataURL(randomCharacterIds);
    setQuery(randomCharactersUrl);
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        characterData,
        getRandomCharacters,
        loading,
        error,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;
