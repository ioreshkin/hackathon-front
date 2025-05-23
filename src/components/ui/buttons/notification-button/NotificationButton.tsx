import styles from './notification-button.module.css';
import {useAppSelector} from '../../../../services/hooks.ts';
import bellImg from '../../../../images/bell.png';
import {useNavigate} from 'react-router-dom';

const NotificationButton = () => {

  const {countOfUnchecked} = useAppSelector(state => state.notification);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/notifications');
  };

  return (
      <div className={styles.container}>
        <img src={bellImg} alt="уведомления" onClick={handleClick} />
        {countOfUnchecked && (<div className={styles.round}>
          <p>{countOfUnchecked}</p>
        </div>)}
      </div>
  );
};

export default NotificationButton;