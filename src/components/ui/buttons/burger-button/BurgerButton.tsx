import styles from './burger-button.module.css';
import burgerImg from '../../../../images/burger.png';
import {RefObject} from 'react';

interface ComponentProps {
  onClick?: () => void;
  ref: RefObject<HTMLButtonElement>;
}

const BurgerButton = ({onClick, ref}: ComponentProps) => {
  return (
      <button onClick={onClick} className={styles.container} ref={ref}>
        <img src={burgerImg} alt="Открыть навигацию"/>
      </button>
  );
};

export default BurgerButton;