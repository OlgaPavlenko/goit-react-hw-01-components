import PropTypes from 'prop-types';
import s from './Friend.module.css';

export default function Friend({ id, avatar, name, isOnline }) {
  const typeClass = isOnline ? s.green : s.red;

  return (
    <li className={s.info} key={id}>
      <span className={typeClass}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
