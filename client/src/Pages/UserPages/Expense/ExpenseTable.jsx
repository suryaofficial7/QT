import React from "react";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";

const expenses = [
  {
    id: 1,
    type: "Business",
    title: "Office Supplies",
    amount: 300,
    category: "Expense",
    date: "2024-10-01",
    dateAdded: "2024-10-02",
  },
  {
    id: 2,
    type: "Personal",
    title: "Salary",
    amount: 2500,
    category: "Income",
    date: "2024-10-05",
    dateAdded: "2024-10-05",
  },
  {
    id: 3,
    type: "Business",
    title: "Client Dinner",
    amount: 150,
    category: "Expense",
    date: "2024-10-10",
    dateAdded: "2024-10-11",
  },
  {
    id: 4,
    type: "Business",
    title: "Client Dinner",
    amount: 250,
    category: "Expense",
    date: "2024-10-10",
    dateAdded: "2024-10-11",
  },
  {
    id: 5,
    type: "Business",
    title: "Client Dinner",
    amount: 150,
    category: "Expense",
    date: "2024-10-10",
    dateAdded: "2024-10-11",
  },
  {
    id: 6,
    type: "Business",
    title: "Client Dinner",
    amount: 150,
    category: "Expense",
    date: "2024-10-10",
    dateAdded: "2024-10-11",
  },
  {
    id: 7,
    type: "Business",
    title: "Client Dinner",
    amount: 150,
    category: "Expense",
    date: "2024-10-10",
    dateAdded: "2024-10-11",
  },
  {
    id: 3,
    type: "Business",
    title: "Client Dinner",
    amount: 150,
    category: "Expense",
    date: "2024-10-10",
    dateAdded: "2024-10-11",
  },
  {
    id: 3,
    type: "Business",
    title: "Client Dinner",
    amount: 150,
    category: "Expense",
    date: "2024-10-10",
    dateAdded: "2024-10-11",
  },
  {
    id: 3,
    type: "Business",
    title: "Client Dinner",
    amount: 150,
    category: "Expense",
    date: "2024-10-10",
    dateAdded: "2024-10-11",
  },
  {
    id: 3,
    type: "Business",
    title: "Client Dinner",
    amount: 150,
    category: "Expense",
    date: "2024-10-10",
    dateAdded: "2024-10-11",
  },
  {
    id: 7,
    type: "Business",
    title: "Client Dinner",
    amount: 150,
    category: "Expense",
    date: "2024-10-10",
    dateAdded: "2024-10-11",
  },
  {
    id: 7,
    type: "Business",
    title: "Client Dinner",
    amount: 150,
    category: "Expense",
    date: "2024-10-10",
    dateAdded: "2024-10-11",
  },
  {
    id: 7,
    type: "Business",
    title: "Client Dinner",
    amount: 150,
    category: "Expense",
    date: "2024-10-10",
    dateAdded: "2024-10-11",
  },
  {
    id: 8,
    type: "Business",
    title: "Client Dinner",
    amount: 150,
    category: "Expense",
    date: "2024-10-10",
    dateAdded: "2024-10-11",
  },
];

const ExpenseTable = () => {
  return (
    <div className="mb-10 bg-gray-100 flex  justify-center px-4">
      <div className="w-full  p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-xl  text-gray-800 text-center mb-4">
          Expense & Income Tracker
        </h2>
        <div className="overflow-scroll h-[500px]">
          <table className="min-w-full bg-transparent ">
            <thead>
              <tr className="text-gray-600 bg-gray-200 uppercase text-sm leading-normal z-10 sticky top-0">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Type</th>
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-right">Amount ($)</th>
                <th className="py-3 px-6 text-center">Expense/Income</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Date Added</th>
                <th className="py-3 px-6 text-center">View</th>

                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm ">
              {expenses.map((expense, index) => (
                <tr
                  key={expense.id}
                  className={`border-b border-gray-200 hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {expense.id}
                  </td>
                  <td className="py-3 px-6 text-left">{expense.type}</td>
                  <td className="py-3 px-6 text-left">{expense.title}</td>
                  <td className="py-3 px-6 text-right">{expense.amount}</td>
                  <td
                    className={`py-3 px-6 text-center ${
                      expense.category === "Income"
                        ? "text-green-600"
                        : "text-red-600"
                    } font-semibold`}
                  >
                    {expense.category}
                  </td>
                  <td className="py-3 px-6 text-left">{expense.date}</td>
                  <td className="py-3 px-6 text-left">{expense.dateAdded}</td>
                  <td className="py-3 px-6 text-left">
                    <Link to={""}>
                      <IoIosEye size={25} className="hover:text-green-600" />
                    </Link>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <button
                      className="px-4 py-2 bg-red-900 hover:bg-red-600 text-white rounded-md transition-transform transform hover:scale-105"
                      onClick={() => alert(`Deleting ID ${expense.id}`)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTable;
