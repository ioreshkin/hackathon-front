import styles from './main-page.module.css';
import floorImg from '../../images/floor.png';
import EmergencyReports from '../../components/emergency-reports/EmergencyReports.tsx';
import DailyReports from '../../components/daily-reports/DailyReports.tsx';
import NotificationButton from '../../components/ui/buttons/notification-button/NotificationButton.tsx';
import {useAppSelector} from '../../services/hooks.ts';

const MainPage = () => {

  const {flats} = useAppSelector(state => state.flats);

  const getFlat = (id: number) => {
    return flats.find((f) => f.id === id);
  };

  const getColor = (id: number) => {
    const currentFlat = getFlat(id);
    if (!currentFlat) return '';

    if (currentFlat.hum == 'critical' || currentFlat.co2 == 'critical' ||
        currentFlat.lux == 'critical' || currentFlat.airIaq == 'critical' || currentFlat.temp == 'critical') {
      return styles.redDot;
    } else if (currentFlat.hum == 'warning' || currentFlat.co2 == 'warning' ||
        currentFlat.lux == 'warning' || currentFlat.airIaq == 'warning' || currentFlat.temp == 'warning') {
      return styles.yellowDot;
    } else return '';
  };

  return (
      <div className={styles.container}>
        <div>
          <NotificationButton/>
        </div>

        <div className={styles.content_container}>
          <div className={styles.monitoring_container}>
            <h1>Система наблюдения УК</h1>
            <div className={styles.map_container}>
              <img src={floorImg} alt="карта вашей квартиры"/>

              <div className={`${styles.dot} ${getColor(1)}`} id={styles.dot1}></div>
              <div className={`${styles.dot} ${getColor(2)}`} id={styles.dot2}></div>
              <div className={`${styles.dot} ${getColor(3)}`} id={styles.dot3}></div>
              <div className={`${styles.dot} ${getColor(4)}`} id={styles.dot4}></div>
              <div className={`${styles.dot} ${getColor(5)}`} id={styles.dot5}></div>

            </div>
          </div>

          <div>
            <h1 className={styles.report_head}>Отчёты о проишествиях</h1>
            <div>
              <EmergencyReports />
            </div>
          </div>

          <div>
            <h1 className={styles.report_head}>Отчеты за день</h1>
            <div>
              <DailyReports />
            </div>
          </div>

        </div>
      </div>
  );
};

export default MainPage;