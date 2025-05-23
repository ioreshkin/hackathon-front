import styles from './toggle.module.css';
import {ChangeEvent} from 'react';

interface ComponentProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const Toggle = ({value, onChange}:ComponentProps) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
      <label className={styles.switch}>
        <input type="checkbox" checked={value} onChange={handleChange} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
  );
};

export default Toggle;