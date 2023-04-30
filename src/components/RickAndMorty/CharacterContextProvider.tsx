import { createContext, useState, useEffect, useCallback } from "react";

import { getUniqRandomNumArray } from "../../helpers";
import { Characters } from "./types";
import {
  getCharacterData,
  characterDataURL,
  favoriteCharactersIds,
  MAX_CHARACTERS,
} from "./helpers";

export const CharacterContext = createContext<any>(null);

const CharacterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characters, setCharacters] = useState<Characters>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const favCharactersUrl: string = characterDataURL(favoriteCharactersIds);
    getCharacterData(favCharactersUrl, setCharacters, setLoading);
  }, []);

  const getRandomShowCharacters = useCallback(() => {
    const randomCharacterIds: number[] = getUniqRandomNumArray(
      9,
      MAX_CHARACTERS
    );

    const randomCharactersUrl: string = characterDataURL(randomCharacterIds);
    getCharacterData(randomCharactersUrl, setCharacters, setLoading);
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        getRandomShowCharacters,
        loading,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;
