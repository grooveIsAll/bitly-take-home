import { useContext } from "react";
import classNames from "classnames";

import Nav from "../shared/Nav/Nav";
import Tile from "../shared/Tile/Tile";
import Spinner from "../shared/Spinner/Spinner";
import Button from "../shared/Button/Button";
import { FormattedCharacter } from "./types";
import { CharacterContext } from "./CharacterContextProvider";

import styles from "./CharacterIndex.module.scss";

const showLogo =
  "https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png";

const CharacterIndex = () => {
  const context = useContext(CharacterContext);
  const { characterData, getRandomCharacters, loading } = context;

  if (loading) return <Spinner className={styles.spinner} />;

  return (
    <>
      <Nav />
      <div className="page">
        <div className={styles.headerContainer}>
          <img className={styles.showLogo} src={showLogo} alt="logo" />
          <p
            className={classNames("font-medium", styles.subheader)}
            role="textbox"
          >
            Get the deets on your favorite interdimesional characters...
          </p>
        </div>
        <div className={styles.btnContainer}>
          <Button onClick={getRandomCharacters} label="Get random characters" />
        </div>
        <div className={styles.grid}>
          {characterData.map((character: FormattedCharacter) => {
            const { id, name, image } = character;
            return (
              <Tile
                key={id}
                link={`/rick-and-morty/${id}`}
                className={styles.tileContainer}
                render={() => {
                  return (
                    <>
                      <div className={styles.tileImgContainer}>
                        <img className={styles.tileImg} src={image} alt="" />
                      </div>
                      <p className={classNames(styles.tileName, "font-medium")}>
                        {name}
                      </p>
                    </>
                  );
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CharacterIndex;
