import styles from './emergency-reports.module.css';
import {useAppSelector} from '../../services/hooks.ts';
import EmergencyReportsItem from '../emergency-reports-item/EmergencyReportsItem.tsx';
import {useEffect, useState} from 'react';
import Button from '../ui/buttons/button/Button.tsx';
import {IEmergencyEvent} from '../../utils/types.ts';


const EmergencyReports = () => {
  const [count, setCount] = useState(5);
  const {emergencyReport} = useAppSelector(state => state.reports);
  const [events, setEvents] = useState<IEmergencyEvent[]>([]);

  useEffect(() => {
    if (emergencyReport) {
      setEvents(emergencyReport.events.slice(0, count));
    }
  }, [emergencyReport, count]);

  const handleShowMoreClick = () => {
    setCount(count + 5);
  };

  if (!events || !emergencyReport || emergencyReport.events.length < 1) return null;

  return (
      <div className={styles.container}>
        {events && events.map((report, index) => (
          <EmergencyReportsItem data={report} key={index} />
        ))}

        {(count < emergencyReport.events.length) && (
            <div className={styles.button_container}>
              <Button onClick={handleShowMoreClick}>Показать больше</Button>
            </div>
        )}
      </div>
  );
};

export default EmergencyReports;