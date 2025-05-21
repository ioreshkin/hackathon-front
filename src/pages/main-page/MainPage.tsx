import styles from './main-page.module.css'
import {request} from "../../services/request.ts";

const MainPage = () => {

  request('/api/lol/lol').catch(res => console.log(res));
  request('/lol/lol').catch(res => console.log(res));
  request('/api/lol').catch(res => console.log(res));


  request('/api/lol/lol').then(res => console.log(res));
  request('/lol/lol').then(res => console.log(res));
  request('/api/lol').then(res => console.log(res));

  return (
      <div className={styles.container}>
        ЭЩКЕРЕ
      </div>
  );
};

export default MainPage;