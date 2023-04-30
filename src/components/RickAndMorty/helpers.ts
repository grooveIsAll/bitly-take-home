import { RawCharacter } from "./types";
import { fetchData } from "../../helpers";

export function characterDataURL(charactersArray: number[]): string {
  return `https://rickandmortyapi.com/api/character/${charactersArray}`;
}

export function formatCharacterData(character: any) {
  const { id, name, status, species, gender, origin, image, episode } =
    character;

  return {
    id,
    name,
    status,
    species,
    gender,
    origin: origin.name,
    image,
    episodes: episode,
    episodeCount: episode.length,
  };
}

export function getCharacterData(
  url: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  setLoading(true)

  fetchData(url)
    .then((data) => {
      if (data.length > 0) {
        const formattedData = data.map((character: RawCharacter) =>
          formatCharacterData(character)
        );
        setData(formattedData);
        setLoading(false)
      } else {
        const newData = formatCharacterData(data)
        setData(newData);
        setLoading(false)
      }
    })
    .catch((error) => {
      console.error(error)
      setLoading(false)
    });
}

// CONSTANTS

export const MAX_CHARACTERS = 826;
export const favoriteCharactersIds = [47, 242, 252, 262, 306, 327, 353, 388, 636];