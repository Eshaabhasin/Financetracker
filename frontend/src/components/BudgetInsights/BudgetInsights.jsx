import React from "react";

function BudgetInsights({ transactions, defaultBudgets }) {
  const actuals = transactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
    return acc;
  }, {});

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-xl mt-6">
      <h2 className="text-yellow-400 font-bold text-xl mb-4">Spending Insights</h2>
      <ul className="text-white space-y-2">
        {Object.keys(defaultBudgets).map((category) => {
          const spent = actuals[category] || 0;
          const budget = defaultBudgets[category];
          const diff = spent - budget;

          return (
            <li key={category}>
              {diff > 0 ? (
                <span className="text-red-400">
                  ⚠️ Over budget in {category} by ₹{diff}
                </span>
              ) : (
                <span className="text-green-400">
                  ✅ Under budget in {category} by ₹{Math.abs(diff)}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BudgetInsights;
