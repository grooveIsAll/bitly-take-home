import { useContext } from 'react'
import classNames from 'classnames'

import Tile from '../shared/Tile/Tile'
import Spinner from '../shared/Spinner/Spinner'
import { FormattedCharacter } from './types'
import { CharacterContext } from './CharacterContextProvider'

import styles from './CharacterIndex.module.scss'

const showLogo = "https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"

const CharacterIndex: React.FunctionComponent = () => {
  const context = useContext(CharacterContext)
  const { characters, getRandomShowCharacters, loading } = context

  if (loading) return <Spinner className={styles.spinner} />

  return (
    <div className="page">
      <div className={styles.headerContainer}>
        <img className={styles.showLogo} src={showLogo} alt="showLogo" />
        <p className={classNames("font-medium", styles.subheader)} role="textbox">
          Get some fun and interesting deets about your favorite interdimesional characters...
        </p>
      </div>
      <button
        onClick={getRandomShowCharacters}
      >
        Get random characters
      </button>
      <div className={styles.grid}>
        {characters.map((character: FormattedCharacter) => {
          const { id, name, image } = character
          return (
            <Tile
              key={id}
              link={`/rick-and-morty/${id}`}
              render={() => {
                return (
                  <>
                    <div className={styles.tileImgContainer}>
                      <img className={styles.tileImg} src={image} alt="" />
                    </div>
                    <p className={classNames(styles.tileName, "font-medium")}>{name}</p>
                  </>
                )
              }}
            />
        )})}
      </div>
    </div>
  )
}

export default CharacterIndex

