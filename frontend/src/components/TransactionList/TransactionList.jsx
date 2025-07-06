function TransactionList({ transactions, onDelete, onEditStart }) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4 text-yellow-300">
        Transaction History
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-400">No transactions added yet.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((txn) => (
            <li
              key={txn.id}
              className="bg-[#2a2a2a] text-white p-5 rounded-lg flex justify-between items-center shadow"
            >
              <div>
                <p className="text-lg font-bold text-yellow-200">
                  ₹{txn.amount} <span className="text-sm text-gray-300">• {txn.category}</span>
                </p>
                <p className="text-sm text-gray-400">
                  {txn.date} &mdash; {txn.description}
                </p>
              </div>

              <div className="space-x-4">
                <button
                  onClick={() => onEditStart(txn)}
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(txn.id)}
                  className="text-red-400 hover:text-red-300 font-medium"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
