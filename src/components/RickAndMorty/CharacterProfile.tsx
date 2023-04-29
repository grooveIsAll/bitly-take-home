import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";

import { fetchData } from "../../helpers";


import styles from "./CharacterProfile.module.scss";

const CharacterProfile: React.FunctionComponent = () => {
  const [currentCharacter, setCurrentCharacter] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const params = useParams();


  useEffect(() => {
    setLoading(true)
    fetchData(`https://rickandmortyapi.com/api/character/${Number(params.id)}`)
      .then(data => {
        setCurrentCharacter(data)
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
        setLoading(false)
      })
  }, [])


  return (
    <div className="page">
      {!loading && JSON.stringify(currentCharacter)}
    </div>
  );
};

export default CharacterProfile;
