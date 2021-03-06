import Transaction from '../Transaction/Transaction';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  console.log(items);
  return (
    <>
      <table className={s.transactionHistory}>
        <thead>
          <tr className={s.header}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
              <Transaction
              id={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
          ))}
        </tbody>
      </table>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
