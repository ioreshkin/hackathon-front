import styles from './notification-item.module.css';
import {INotification} from '../../utils/types.ts';
import warningImg from '../../images/warning.png';
import criticalImg from '../../images/critical.png';

interface ComponentProps {
  data: INotification;
}

const NotificationItem = ({data}:ComponentProps) => {

  return (
      <div className={styles.container}>
        <img src={data.level == 'warning' ? warningImg : criticalImg} alt="аномальное значение"/>
        <div>
          <h2>{data.level == 'warning' ? 'Внимание, аномальное значение датчика!' :
              'Внимание, чрезвычайное происшествие!'}</h2>
          <p>Какой-то текст</p>
        </div>


      </div>
  );
};

export default NotificationItem;