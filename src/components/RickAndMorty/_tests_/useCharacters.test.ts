import { renderHook } from "@testing-library/react-hooks";

import useCharacters from "./../useCharacters";
import { characterDataURL } from "./../helpers";

describe("useCharacters", () => {
  test("fetch data from the api", () => {
    const url = characterDataURL("68");
    const { result } = renderHook(() => useCharacters(url));
    const { characterData } = result.current;

    expect(characterData).toEqual([
      {
        episodeCount: 1,
        episodes: ["23"],
        gender: "Male",
        id: 1,
        image: "https://rickandmortyapi.com/api/character/avatar/68.jpeg",
        name: "Colossus",
        origin: "Post-Apocalyptic Earth",
        species: "Human",
        status: "Dead",
      },
    ]);
  });

  test("fetch only one record if only one id", () => {
    const url = characterDataURL("68");
    const { result } = renderHook(() => useCharacters(url));
    const { characterData } = result.current;

    expect(characterData.length).toBe(1);
  });
});
