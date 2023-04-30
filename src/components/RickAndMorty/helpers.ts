export function characterDataURL(charactersArray: number[] | string): string {
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



// CONSTANTS

// MAX NUMBER OF CHARACTERS RETURN FROM API
export const MAX_CHARACTERS = 826;

// ARRAY OF MY FAVORITE SECONDARY CHARACTERS
export const favoriteCharactersIds = [47, 242, 252, 262, 306, 327, 353, 388, 636];