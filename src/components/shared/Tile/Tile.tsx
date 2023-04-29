import { Link } from 'react-router-dom'
import classNames from 'classnames';

import styles from './Tile.module.scss'

const Tile = ({
  render,
  link,
  onClick
}:{
  link?: string;
  render: () => React.ReactNode;
  onClick?: () => void
}) => {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className={classNames(styles.tile, styles.linkHover)}
          onClick={onClick}
        >
          {render()}
        </Link>
      ) : (
        <div
          className={styles.tile}
          onClick={onClick}
        >
          {render()}
        </div>
      )}
    </>
  )
}

export default Tile