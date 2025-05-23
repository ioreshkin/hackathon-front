import './reset.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './pages/main-page/MainPage.tsx';
import ProfilePage from './pages/profile-page/ProfilePage.tsx';
import NotificationPage from './pages/notifications-page/NotificationPage.tsx';
import SettingsPage from './pages/settings-page/SettingsPage.tsx';
import {useEffect} from 'react';
import {useAppDispatch} from './services/hooks.ts';
import {fetchNotifications} from './slices/notificationSlice.ts';
import {fetchStatuses} from './slices/flatsSlice.ts';
import {fetchEmergencyReport} from './slices/reportsSlice.ts';
import {getDailyReport, simulate} from './services/devicesService.ts';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {

    simulate();

    dispatch(fetchNotifications());
    dispatch(fetchStatuses());
    dispatch(fetchEmergencyReport());

    const intervalId = setInterval(() => {
      dispatch(fetchNotifications());
      dispatch(fetchStatuses());
      dispatch(fetchEmergencyReport());
      getDailyReport().then(res => console.log(res));
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
        <Router>
          <Routes>
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/notifications/settings' element={<SettingsPage />} />

            <Route path='/notifications' element={<NotificationPage />} />

            <Route path="/*" element={<MainPage/>} />
          </Routes>
        </Router>
  );
}

export default App;
