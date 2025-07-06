import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#FFD700", "#FF69B4", "#87CEFA", "#98FB98"];

function CategoryPieChart({ data }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">Category Breakdown</h2>
      <PieChart width={400} height={300}>
        <Pie data={data} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={100} label>
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default CategoryPieChart;
