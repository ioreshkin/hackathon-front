import styles from './profile.module.css';
import AppNavigation from '../../components/app-navigation/AppNavigation.tsx';

const ProfilePage = () => {
  return (
      <div className={styles.container}>
        <AppNavigation />
      </div>
  );
};

export default ProfilePage;