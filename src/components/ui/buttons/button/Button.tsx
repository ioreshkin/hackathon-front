import styles from './button.module.css';
import {ReactNode} from 'react';

interface ComponentProps {
  onClick: () => void;
  children: ReactNode;
}

const Button = ({onClick, children}:ComponentProps) => {
  return (
      <button onClick={onClick} className={styles.container} >
        {children}
      </button>
  );
};

export default Button;