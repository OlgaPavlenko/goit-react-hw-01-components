import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import StatisticData from './StatisticData';

export default function Statistics({ title, stats }) {
  const isTitle = true;

  return (
    <section className={s.statistics}>
      {isTitle && <h2 className={s.title}>{title}</h2>}
      <ul className={s.container}>
        {stats.map(item => (
          <StatisticData
            key={item.id}
            label={item.label}
            percentage={item.percentage}
            id={item.id}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
