import { createContext, useState, useEffect, useCallback } from "react";

import { getUniqRandomNumArray, fetchData } from "../../helpers";
import { Characters, RawCharacter } from "./types";
import {
  characterDataURL,
  favoriteCharactersIds,
  MAX_CHARACTERS,
  formatCharacterData
} from "./helpers";

export const defaultState = {
  characters: [{
    id: 1,
    name: '',
    image: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    episodeCount: 1,
    episodes: [""]
  }],
  getRandomShowCharacters: () => {},
  loading: false,
}

export const CharacterContext = createContext<typeof defaultState>(null!);

const CharacterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characters, setCharacters] = useState<Characters>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true)
      const favCharactersUrl: string = characterDataURL(favoriteCharactersIds);
      try {
        const data = await fetchData(favCharactersUrl)
        const formattedData = data.map((character: RawCharacter) =>
          formatCharacterData(character)
        );
        setCharacters(formattedData);
        setLoading(false)

      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    })()
  }, []);

  const getRandomShowCharacters = useCallback(async () => {
    const randomCharacterIds: number[] = getUniqRandomNumArray(
      9,
      MAX_CHARACTERS
    );

    const randomCharactersUrl: string = characterDataURL(randomCharacterIds);

    try {
      const data = await fetchData(randomCharactersUrl)
      const formattedData = data.map((character: RawCharacter) =>
        formatCharacterData(character)
      );
      setCharacters(formattedData);
      setLoading(false)

    } catch (error) {
      console.error(error)
      setLoading(false)
    }
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
