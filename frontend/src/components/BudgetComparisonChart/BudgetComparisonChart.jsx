import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function BudgetComparisonChart({ transactions, defaultBudgets }) {
  const actuals = transactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
    return acc;
  }, {});

  const data = Object.keys(defaultBudgets).map((category) => ({
    category,
    budget: defaultBudgets[category],
    spent: actuals[category] || 0,
  }));

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-xl mt-10">
      <h2 className="text-yellow-400 text-xl font-bold mb-4">Budget vs Spent</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="category" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: "#2a2a2a", color: "#fff" }} />
          <Legend />
          <Bar dataKey="budget" fill="#60a5fa" radius={[4, 4, 0, 0]} />
          <Bar dataKey="spent" fill="#facc15" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BudgetComparisonChart;
