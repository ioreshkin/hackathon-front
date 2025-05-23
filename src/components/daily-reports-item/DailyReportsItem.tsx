import styles from './daily-reports-item.module.css';
import {IEmergencyEvent} from '../../utils/types.ts';

interface IComponentProps {
  data: IEmergencyEvent;
}

const DailyReportsItem = ({data}: IComponentProps) => {
  return (
      <div className={styles.container}>
        <h1>{data.title}</h1>

        <p>{data.summary}</p>
      </div>
  );
};

export default DailyReportsItem;