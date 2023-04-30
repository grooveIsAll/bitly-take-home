import { Link } from 'react-router-dom'
import classNames from 'classnames';

import styles from './Tile.module.scss'

const Tile = ({
  render,
  link,
  onClick,
  className
}: TileProps) => {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className={classNames(styles.tile, styles.linkHover, className)}
          onClick={onClick}
        >
          {render()}
        </Link>
      ) : (
        <div
          className={classNames(styles.tile, className)}
          onClick={onClick}
        >
          {render()}
        </div>
      )}
    </>
  )
}

export default Tile

interface TileProps {
  link?: string;
  render: () => React.ReactNode;
  onClick?: () => void;
  className?: string
}