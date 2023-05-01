import { Route, Routes } from "react-router-dom";

import CharacterContextProvider from "./CharacterContextProvider";
import CharacterIndex from "./CharacterIndex";
import CharacterProfile from "./CharacterProfile";

const CharacterRoutes = () => {
  return (
    <CharacterContextProvider>
      <Routes>
        <Route path="/" element={<CharacterIndex />} />
        <Route path="/:id" element={<CharacterProfile />} />
      </Routes>
    </CharacterContextProvider>
  );
};

export default CharacterRoutes;
