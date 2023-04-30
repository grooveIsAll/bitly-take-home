import { useState, useEffect } from 'react'
import classNames from 'classnames'

import Tile from '../shared/Tile/Tile'
import Spinner from '../shared/Spinner/Spinner'
import { formatCharacterData } from './helpers'
import { fetchData } from '../../helpers'
import { Characters, RawCharacter, FormattedCharacter } from './types'

import styles from './CharacterIndex.module.scss'

const showLogo = "https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
export const favoriteCharactersIds = [47, 242, 252, 262, 306, 327, 353, 388, 636];

const CharacterIndex: React.FunctionComponent = () => {
  const [data, setData] = useState<Characters>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetchData(`https://rickandmortyapi.com/api/character/${favoriteCharactersIds}`)
      .then(data => {
        const formattedData = data.map((character: RawCharacter) => formatCharacterData(character))
        setData(formattedData)
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
        setLoading(false)
      })
  }, [])

  if (loading) return <Spinner />

  return (
    <div className="page">
      <div className={styles.headerContainer}>
        <img className={styles.showLogo} src={showLogo} alt="showLogo" />
        <p className={classNames("font-medium", styles.subheader)} role="textbox">
          Get some fun and interesting deets about your favorite interdimesional characters...
        </p>
      </div>

      <div className={styles.grid}>
        {data.map((character: FormattedCharacter) => {
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

