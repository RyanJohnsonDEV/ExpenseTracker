import ExpenseForm from "./ExpenseForm";
import "./AddExpense.css";
import "../UI/Card.css";
import { useState } from "react";

function AddExpense(props) {
  const expenseForm = <ExpenseForm onSave={saveData} onCancel={cancelForm} />;

  const newExpenseBtn = (
    <button onClick={showForm} className="newExpenseBtn">
      Add New Expense
    </button>
  );
  const [form, newForm] = useState(newExpenseBtn);

  function saveData(enteredData) {
    const expenseData = {
      id: Math.floor(Math.random() * 10000000),
      ...enteredData,
    };
    props.onSave(expenseData);
    cancelForm();
  }

  function showForm() {
    newForm(expenseForm);
  }

  function cancelForm() {
    newForm(newExpenseBtn);
  }

  return <div className="addExpense card">{form}</div>;
}

export default AddExpense;
