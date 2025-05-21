import styles from './main-page.module.css'
import {request} from "../../services/request.ts";

const MainPage = () => {

  request('/lol').then(res => console.log(res));

  return (
      <div className={styles.container}>
        ЭЩКЕРЕ
      </div>
  );
};

export default MainPage;