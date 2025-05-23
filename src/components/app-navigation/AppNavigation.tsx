import styles from './app-navigation.module.css';
import {useEffect, useRef, useState} from 'react';
import BurgerButton from '../ui/buttons/burger-button/BurgerButton.tsx';
import settingsImg from '../../images/settings.png';
import {Link} from 'react-router-dom';

const AppNavigation = () => {

  const [showNav, setShowNav] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (
          navRef.current &&
          !navRef.current.contains(event.target as Node)
      ) {
        setShowNav(false);
      }
    };

    if (showNav) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNav]);

  const handleBurgerClick = () => {
    setShowNav(!showNav);
  };

  return (
      <div className={styles.container}>
        <div className={showNav ? styles.hidden : ''}>
          <BurgerButton onClick={handleBurgerClick} ref={burgerRef} />
          <button className={styles.settings_button}>
            <img src={settingsImg} alt="настройки" />
          </button>
        </div>

        {showNav && <nav className={styles.nav} ref={navRef}>
          <ul>
            <li className={styles.elem}><Link to='/'>Мой дом</Link></li>
            <li className={styles.elem}><Link to='/notifications'>Уведомления</Link></li>
            <li className={styles.elem}><Link to='/reports'>Отчеты</Link></li>
            <li className={styles.elem}><Link to='/profile'>Личный кабинет</Link></li>
          </ul>
        </nav>}
      </div>
  );
};

export default AppNavigation;