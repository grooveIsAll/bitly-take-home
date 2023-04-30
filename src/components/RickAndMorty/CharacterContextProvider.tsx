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
      name: "",
      image: "",
      status: "",
      species: "",
      gender: "",
      origin: "",
      episodeCount: 1,
      episodes: [""],
    },
  ],
  getRandomCharacters: () => {},
  loading: false,
};

export const CharacterContext = createContext<typeof defaultCharacterContext>(null!);
const initUrl: string = characterDataURL(favoriteCharactersIds);

const CharacterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [query, setQuery] = useState(initUrl)
  const { characterData, loading } = useCharacters(query)

  const getRandomCharacters = useCallback(async () => {
    const randomCharacterIds: number[] = getUniqRandomNumArray(
      9,
      MAX_CHARACTERS
    );
    const randomCharactersUrl: string = characterDataURL(randomCharacterIds);
    setQuery(randomCharactersUrl)
  }, [])

  return (
    <CharacterContext.Provider
      value={{
        characterData,
        getRandomCharacters,
        loading,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;
