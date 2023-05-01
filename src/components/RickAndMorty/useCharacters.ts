import { useState, useEffect } from "react";

import { fetchData } from "../../helpers";
import { RawCharacter, FormattedCharacter  } from "./types";
import { formatCharacterData } from "./helpers";
import { defaultCharacterContext } from "./CharacterContextProvider";

// CUSTOM HOOK:
// TAKES A URL AND RETURNS CHARACTER DATA + LOADING BOOLEAN

const useCharacterData = (url: string): {
  characterData: FormattedCharacter[],
  loading: boolean
} => {
  const [characterData, setCharacterData] = useState(
    defaultCharacterContext.characterData
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await fetchData(url);

        const formattedData = data.map((character: RawCharacter) =>
          formatCharacterData(character)
        );

        setCharacterData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return {
    characterData,
    loading,
  };
};

export default useCharacterData;
