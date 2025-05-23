import styles from './daily-reports.module.css';

interface ComponentProps {
  onClick: () => void;
}

const DailyReports = ({onClick}:ComponentProps) => {

  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1; // Месяцы 0-11
  const year = date.getFullYear();

  return (
      <div className={styles.container} onClick={onClick}>
        <h1>Сегодня</h1>

        <p>{`${day}.${month}.${year}`}</p>
      </div>
  );
};

export default DailyReports;