import styles from './charts.module.css';
import {useAppSelector} from '../../services/hooks.ts';
import {CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

interface IParameterNames {
  hum: string;
  temp: string;
  co2: string;
  lux: string;
  airIaq: string;
}

const Charts = () => {
  const { dailyReports } = useAppSelector(state => state.reports);

  const now = new Date();
  const currentHour = now.getHours();

  const hoursArray = Array.from({ length: currentHour + 1 }, (_, i) => i);

  const parameterNames: IParameterNames = {
    hum: 'Влажность',
    temp: 'Температура',
    co2: 'CO2',
    lux: 'Освещенность',
    airIaq: 'Индекс воздуха'
  };

  const getChartData = (parameter: keyof IParameterNames) => {
    const paramReport = dailyReports.find(report => report.parameter === parameter);

    if (!paramReport) return [];

    return hoursArray.map(hour => {
      const value = paramReport.flats[0]?.values[hour];

      return {
        time: `${hour}:00`,
        value: value !== undefined ? Number(value) : null,
        parameter
      };
    }).filter(point => point.value !== null); // Фильтруем пустые значения
  };

  const parameters: (keyof IParameterNames)[] = ['hum', 'temp', 'co2', 'lux', 'airIaq'];

  return (
      <div className={styles.container}>
        {parameters.map(param => {
          const chartData = getChartData(param);

          return (
              <div key={param} className={styles.chartWrapper}>
                <h3>{parameterNames[param]}</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                      data={chartData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="time"
                        label={{ value: 'Время', position: 'insideBottomRight', offset: -5 }}
                    />
                    <YAxis
                        domain={[0, 5]}
                        label={{ value: parameterNames[param], angle: -90, position: 'insideLeft' }}
                    />

                    <ReferenceLine
                        y={2}
                        stroke="orange"
                        strokeWidth={2}
                    />

                    <ReferenceLine
                        y={3}
                        stroke="red"
                        strokeWidth={2}
                    />

                    <Tooltip
                        formatter={(value) => [`${value}`, parameterNames[param]]}
                        labelFormatter={(time) => `Время: ${time}`}
                    />

                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                        name={parameterNames[param]}
                        isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
          );
        })}
      </div>
  );
};

export default Charts;