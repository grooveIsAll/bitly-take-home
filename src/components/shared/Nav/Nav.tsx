import { useNavigate, Link } from 'react-router-dom'

import Button from '../Button/Button'

import styles from './Nav.module.scss'

const Nav = ({hideBack}: {hideBack?: boolean}) => {
  const navigate = useNavigate()

  return (
    <nav className={styles.navBar}>
      <div className={styles.navContainer}>
        {!hideBack ? (
          <Button
            className={styles.backButton}
            onClick={() => navigate(-1)}
            label="Back"
          />
        ): null}
      </div>

      <Link
        to="/"
        className="font-small"
      >
        Home
      </Link>
    </nav>
  )
}

export default Nav