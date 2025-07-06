import React, { useState } from "react";
import CategoryPieChart from "../CategoryPieChart/CategoryPieChart";
import MonthlyExpensesChart from "../MonthlyExpensesChart/MonthlyExpensesChart";
import TransactionList from "../TransactionList/TransactionList";
import TransactionForm from "../Transcationform/Transactionform";
import BudgetComparisonChart from "../BudgetComparisonChart/BudgetComparisonChart";
import BudgetInsights from "../BudgetInsights/BudgetInsights";
function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const defaultBudgets = {
  Food: 5000,
  Shopping: 3000,
  Transport: 2000,
  Health: 1500,
};

  const handleAdd = (txn) => {
    setTransactions([txn, ...transactions]);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const handleEditStart = (txn) => {
    setEditingTransaction(txn);
  };

  const handleEdit = (updatedTxn) => {
    setTransactions(
      transactions.map((t) => (t.id === updatedTxn.id ? updatedTxn : t))
    );
    setEditingTransaction(null);
  };

  const monthlyData = Object.values(
    transactions.reduce((acc, t) => {
      const month = new Date(t.date).toLocaleString("default", {
        month: "short",
      });
      acc[month] = acc[month] || { month, amount: 0 };
      acc[month].amount += Number(t.amount);
      return acc;
    }, {})
  );

  const categoryData = Object.values(
    transactions.reduce((acc, t) => {
      acc[t.category] = acc[t.category] || {
        category: t.category,
        value: 0,
      };
      acc[t.category].value += Number(t.amount);
      return acc;
    }, {})
  );

  const totalExpenses = transactions.reduce(
    (sum, t) => sum + Number(t.amount),
    0
  );

  const topCategory = Object.entries(
    transactions.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

  const mostRecent = transactions[0];

  return (
    <div className="bg-black text-white min-h-screen px-10 py-8">
      {/* 🔶 Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Total Expenses */}
        <div className="bg-[#2a2a2a] p-6 rounded-xl shadow text-white">
          <h3 className="text-gray-400 text-sm">Total Expenses</h3>
          <p className="text-2xl font-bold text-yellow-300">₹{totalExpenses}</p>
        </div>

        {/* Top Category */}
        <div className="bg-[#2a2a2a] p-6 rounded-xl shadow text-white">
          <h3 className="text-gray-400 text-sm">Top Spending Category</h3>
          <p className="text-xl font-bold text-yellow-200">{topCategory}</p>
        </div>

        {/* Most Recent */}
        <div className="bg-[#2a2a2a] p-6 rounded-xl shadow text-white">
          <h3 className="text-gray-400 text-sm">Most Recent Transaction</h3>
          {mostRecent ? (
            <div>
              <p className="text-base font-semibold text-yellow-200">
                ₹{mostRecent.amount} — {mostRecent.category}
              </p>
              <p className="text-sm text-gray-400">{mostRecent.description}</p>
              <p className="text-xs text-gray-500">{mostRecent.date}</p>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No transactions yet</p>
          )}
        </div>
      </div>

      {/* 🔶 Form + Charts Row */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Form */}
        <div className="lg:w-1/2 w-full">
          <TransactionForm
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            editingTransaction={editingTransaction}
          />
        </div>

        {/* Right: Charts */}
        <div className="lg:w-1/2 w-full flex flex-col gap-8">
          <MonthlyExpensesChart data={monthlyData} />
          <CategoryPieChart data={categoryData} />
        </div>
      </div>
 {transactions.length > 0 && (
  <>
    <BudgetComparisonChart
      transactions={transactions}
      defaultBudgets={defaultBudgets}
    />
    <BudgetInsights
      transactions={transactions}
      defaultBudgets={defaultBudgets}
    />
  </>
)}
      {/* 🔶 Bottom: Transaction List */}
      <div className="mt-10">
        <TransactionList
          transactions={transactions}
          onDelete={handleDelete}
          onEditStart={handleEditStart}
        />
      </div>
    </div>
  );
}

export default Dashboard;
