import styles from './settings-page.module.css';
import backImg from '../../images/back.png';
import {useNavigate} from 'react-router-dom';
import SettingsItem from '../../components/settings-item/SettingsItem.tsx';
import settings1Image from '../../images/settings1.png';
import settings2Image from '../../images/settings2.png';
import settings3Image from '../../images/settings3.png';
import settings4Image from '../../images/settings4.png';
import settings5Image from '../../images/settings5.png';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {notificationSlice} from '../../slices/notificationSlice.ts';

const SettingsPage = () => {

  const navigate = useNavigate();

  const [hum, setHum] = useState(false);
  const [temp, setTemp] = useState(false);
  const [co2, setCo2] = useState(false);
  const [lux, setLux] = useState(false);
  const [airIaq, setAirIaq] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notificationSlice.actions.setSettings({
      hum: hum,
      temp: temp,
      co2: co2,
      lux: lux,
      airIaq: airIaq,
    }));


  }, [hum, temp, co2, lux, airIaq]);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
      <div className={styles.container}>
        <div className={styles.header_container}>
          <button onClick={handleBackClick}>
            <img src={backImg} alt="Назад"/>
          </button>

          <h1>Настройка уведомлений</h1>
        </div>

        <div className={styles.settings_container}>
          <div className={styles.settings_row}>
            <SettingsItem image={settings1Image} value={hum} onChange={setHum} title='Датчик влажности' />
            <SettingsItem image={settings2Image} value={temp} onChange={setTemp} title='Датчик температуры' />
          </div>

          <div className={styles.settings_row}>
            <SettingsItem image={settings3Image} value={co2} onChange={setCo2} title='Датчик концентрации CO2' />
            <SettingsItem image={settings4Image} value={lux} onChange={setLux} title='Датчик освещенности'/>
          </div>

          <SettingsItem image={settings5Image} value={airIaq} onChange={setAirIaq} title='Индекс качества воздуха' />
        </div>
      </div>
  );
};

export default SettingsPage;