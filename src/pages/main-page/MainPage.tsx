import styles from './main-page.module.css'
import {request} from "../../services/request.ts";

const MainPage = () => {

  request('/lol/lol').catch(res => console.log(res));
  request('/lol').catch(res => console.log(res));


  request('/lol/lol').then(res => console.log(res));
  request('/lol').then(res => console.log(res));


  return (
      <div className={styles.container}>
        ЭЩКЕРЕ
      </div>
  );
};

export default MainPage;