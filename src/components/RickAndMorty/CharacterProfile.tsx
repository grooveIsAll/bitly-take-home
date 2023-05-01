import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";

import Nav from "../shared/Nav/Nav";
import Spinner from "../shared/Spinner/Spinner";
import { formatCharacterData, characterDataURL } from "./helpers";
import { fetchData } from "../../helpers";
import { FormattedCharacter, Character } from "./types";

import styles from "./CharacterProfile.module.scss";

const CharacterProfile = ({
  hideLoading = false,
}: {
  hideLoading?: boolean;
}) => {
  const [currentCharacter, setCurrentCharacter] = useState<Character>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const params = useParams();

  // TODO: IF ERROR, SHOW ERROR PAGE AND REDIRECT HOME

  useEffect(() => {
    const url = characterDataURL(params.id!);
    setLoading(true);

    (async () => {
      try {
        const data = await fetchData(url);
        const formattedCharacter = formatCharacterData(data);
        setCurrentCharacter(formattedCharacter);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    })();
  }, []);

  if (loading && !hideLoading) return <Spinner className={styles.spinner} />;

  return (
    <>
      <Nav />
      <div className="page">
        <div className={styles.profileContainer}>
          <h1
            className={classNames(styles.profileHeader, "font-large")}
            data-testid="heading"
          >
            Character Stats
          </h1>
          <div className={styles.cardContainer}>
            {currentCharacter ? (
              <CharacterCard character={currentCharacter} />
            ) : null}
          </div>
        </div>
      </div>
    </>
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
      <div className={classNames(styles.cardStats, "font-small")}>
        <p>
          <span className={styles.cardStatLabel}>Status:</span> {status}
        </p>
        <p>
          <span className={styles.cardStatLabel}>Species:</span> {species}
        </p>
        <p>
          <span className={styles.cardStatLabel}>Gender:</span> {gender}
        </p>
        <p>
          <span className={styles.cardStatLabel}>Origin:</span> {origin}
        </p>
        <p>
          <span className={styles.cardStatLabel}>Episode Count:</span>{" "}
          {episodeCount}
        </p>
      </div>
    </div>
  );
};
