import {TransactionListItem} from './TransactionListItem'
import transactions from './transactions.json';

function TransactionList() {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <TransactionListItem
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  )
}

export { TransactionList };