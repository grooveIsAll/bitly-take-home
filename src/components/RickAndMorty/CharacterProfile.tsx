import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";

import Spinner from "../shared/Spinner/Spinner";
import { formatCharacterData } from "./helpers";
import { fetchData } from "../../helpers";
import { FormattedCharacter, Character } from "./types";

import styles from "./CharacterProfile.module.scss";

const CharacterProfile: React.FunctionComponent = () => {
  const [currentCharacter, setCurrentCharacter] = useState<Character>(null)
  const [loading, setLoading] = useState(false)
  const params = useParams();


  useEffect(() => {
    setLoading(true)
    fetchData(`https://rickandmortyapi.com/api/character/${Number(params.id)}`)
      .then(data => {
        const formattedCharacter = formatCharacterData(data)
        setCurrentCharacter(formattedCharacter)
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
        setLoading(false)
      })
  }, [])

  if (loading) return <Spinner className={styles.spinner} />

  return (
    <div className="page">
      <div className={styles.cardContainer}>
        <h1>Character Stats</h1>
        {currentCharacter && <CharacterCard character={currentCharacter} />}
      </div>
    </div>
  );
};

export default CharacterProfile;

const CharacterCard = ({ character }: { character: FormattedCharacter }) => {
  const { name, status, species, gender, image, origin, episodeCount } =
    character;
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.cardImg} src={image} alt="" />
        <h3 className={classNames(styles.cardName, "font-medium")}>{name}</h3>
      </div>
      <div className={classNames(styles.statsBlock, "font-small")}>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin}</p>
        <p>Episode Count: {episodeCount}</p>
      </div>
    </div>
  );
};
