import styles from './daily-reports.module.css';
import {useState} from 'react';
import {useAppSelector} from '../../services/hooks.ts';
import EmergencyReportsItem from '../emergency-reports-item/EmergencyReportsItem.tsx';
import Button from '../ui/buttons/button/Button.tsx';

const DailyReports = () => {
  const [count, setCount] = useState(0);
  const {dailyReports} = useAppSelector(state => state.reports);

  const getFilteredReports = () => {
    return dailyReports.slice(0, count);
  };

  const handleShowMoreClick = () => {
    setCount(count + 5);
  };

  return (
      <div className={styles.container}>
        {getFilteredReports().map((report, index) => (
          <EmergencyReportsItem data={report} key={index}/>
        ))}

        {(count < dailyReports.length) && (
            <div className={styles.button_container}>
              <Button onClick={handleShowMoreClick}>Показать больше</Button>
            </div>
        )}
      </div>
  );
};

export default DailyReports;