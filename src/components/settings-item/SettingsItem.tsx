import styles from './settings-item.module.css';
import Toggle from '../ui/buttons/toggle/Toggle.tsx';

interface IComponentProps {
  image: string;
  value: boolean;
  onChange: (value: boolean) => void;
  title: string;
}

const SettingsItem = ({image, value, onChange, title}:IComponentProps) => {
  return (
      <div className={styles.container}>
        <div className={styles.top_row}>
          <img src={image} alt={title}/>
          <Toggle value={value} onChange={onChange}/>
        </div>

        <h2>{title}</h2>
      </div>
  );
};

export default SettingsItem;