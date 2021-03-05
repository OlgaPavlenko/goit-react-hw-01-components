import PropTypes from 'prop-types';
import s from './Friend.module.css';

export default function Friend({ avatar, name, isOnline }) {
  const typeClass = isOnline ? s.green : s.red;

  return (
    <>
      <span className={typeClass}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
