import styles from './notification-window-item.module.css';
import {INotification} from '../../utils/types.ts';

interface IComponentProps {
  data: INotification
}

const NotificationWindowItem = ({data}: IComponentProps) => {
  return (
      <div className={styles.container}>
        {/*TODO КАРТИНКИ В ЗАВИСИМОТИ ОТ ТИПА УВЕДОМЛЕНИЯ - ЖЕЛТЫЙ ТРЕУГЛОЬНИК ЕСЛИ СРЕДНЕЕ, КРАСНЫЙ ВОСКЛИЦАТЕЛЬНЫЙ ЗНАК ЕСЛИ НАИБОЛЬШЕЕ*/}
        <img src="" alt=""/>
        <p>{data.title}</p>
      </div>
  );
};

export default NotificationWindowItem;