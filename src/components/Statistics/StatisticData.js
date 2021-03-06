import PropTypes from 'prop-types';
import s from './StatisticData.module.css';

export default function StatisticData({ id, label, percentage }) {
  return (
      <li className={s.statList}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </li>
  );
}

StatisticData.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
