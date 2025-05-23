import styles from './notifications-page.module.css';
import NotificationItem from '../../components/notofication-item/NotificationItem.tsx';
import {useEffect} from 'react';
import backImg from '../../images/back.png';
import settingsImg from '../../images/settings.png';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../services/hooks.ts';
import {notificationSlice} from '../../slices/notificationSlice.ts';

const NotificationPage = () => {
  const {notifications} = useAppSelector(state => state.notification);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  console.log(notifications);

  useEffect(() => {
    dispatch(notificationSlice.actions.checkNotifications());
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSettings = () => {
    navigate('/notifications/settings');
  };

  return (
      <div className={styles.container}>
        <div className={styles.header_container}>
          <button onClick={handleBackClick}>
            <img src={backImg} alt="Назад"/>
          </button>
          <h1>Уведомления</h1>
          <button onClick={handleSettings}>
            <img src={settingsImg} alt="Настройки уведомлений"/>
          </button>
        </div>
        
        <div className={styles.notifications_container}>
          {notifications.map((notification, index) => (
              <NotificationItem data={notification} key={index} />
          ))}
        </div>
      </div>
  );
};

export default NotificationPage;