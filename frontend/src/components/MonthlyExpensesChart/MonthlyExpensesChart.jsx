import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function MonthlyExpensesChart({ data }) {
  return (
    <div className="bg-[#1f1f1f] text-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
        Monthly Expenses
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#2d2d2d",
              border: "none",
              color: "white",
            }}
          />
          <Bar dataKey="amount" fill="#facc15" barSize={40} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyExpensesChart;
