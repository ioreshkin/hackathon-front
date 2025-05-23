import styles from './daily-reports.module.css';

interface ComponentProps {
  onClick: () => void;
}

const DailyReports = ({onClick}:ComponentProps) => {

  return (
      <div className={styles.container} onClick={onClick}>
        <h1>Сегодня</h1>

        <p>{Date.now()}</p>
      </div>
  );
};

export default DailyReports;