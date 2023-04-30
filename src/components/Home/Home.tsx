import React from 'react';
import { useNavigate } from 'react-router';

import Button from '../shared/Button/Button';

import logo from './../../logo.svg';
import styles from './Home.module.scss';

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.home}>
      <header className={styles.homeHeader}>
        <img src={logo} className={styles.homeLogo} alt="logo" />
        <h1 className='font-xlarge'>
          Hello Multiverse World!
        </h1>

        <Button
          onClick={() => navigate("/rick-and-morty")}
          label='Learn about Rick and Morty'
          className={styles.btn}
        />
      </header>
    </div>
  );
}

export default Home;
