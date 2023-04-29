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