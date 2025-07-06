import React, { useState, useEffect } from "react";

const categories = ["Food", "Shopping", "Transport", "Health"];

function TransactionForm({ onAdd, onEdit, onDelete, editingTransaction }) {
  const [formData, setFormData] = useState({
    amount: "",
    date: "",
    description: "",
    category: "Food",
  });

  useEffect(() => {
    if (editingTransaction) {
      setFormData(editingTransaction);
    } else {
      setFormData({
        amount: "",
        date: "",
        description: "",
        category: "Food",
      });
    }
  }, [editingTransaction]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid =
      formData.amount &&
      formData.date &&
      formData.description &&
      formData.category;

    if (!isValid) return;

    if (editingTransaction) {
      onEdit(formData);
    } else {
      onAdd({ ...formData, id: Date.now() });
    }

    resetForm();
  };

  const handleDelete = () => {
    if (editingTransaction) {
      onDelete(editingTransaction.id);
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      amount: "",
      date: "",
      description: "",
      category: "Food",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1f1f1f] text-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
        {editingTransaction ? "Edit Transaction" : "Add Transaction"}
      </h2>

      <div className="space-y-4">
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full bg-black text-white border border-gray-600 p-3 rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full bg-black text-white border border-gray-600 p-3 rounded"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full bg-black text-white border border-gray-600 p-3 rounded"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full bg-black text-white border border-gray-600 p-3 rounded"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-3 rounded font-bold hover:bg-yellow-300"
          >
            {editingTransaction ? "Update" : "Add"}
          </button>

          {editingTransaction && (
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default TransactionForm;
