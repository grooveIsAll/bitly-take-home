import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { fetchData } from '../../helpers'

import styles from './CharacterIndex.module.scss'

const showLogo = "https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
export const favoriteCharactersIds = [47, 242, 252, 262, 306, 327, 353, 388, 636];

const CharacterIndex: React.FunctionComponent = () => {
  const [data, setData] = useState<any>([])

  useEffect(() => {
    fetchData(`https://rickandmortyapi.com/api/character/${favoriteCharactersIds}`)
      .then(data => setData(data))
  }, [])

  console.log(data)

  return (
    <div className="page">
      {data.map((character: any, index: number) => (
        <Link
          to={`/rick-and-morty/${character.id}`}
          key={index}
        >
          {character.name}
        </Link>
      ))}
    </div>
  )
}

export default CharacterIndex

