import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart.js";

function Expenses(props) {
  const items = props.items;
  const [year, setYear] = useState("2023");
  const filteredItems = items.filter(
    (expense) => expense.date.getFullYear() === parseInt(year)
  );

  let expensesContent = (
    <p
      style={{
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      No Expenses found
    </p>
  );

  if (filteredItems.length > 0) {
    expensesContent = filteredItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        id={expense.id}
        title={expense.title}
        price={price(expense.price)}
        date={expense.date}
        delete={deleteEntry}
      />
    ));
  }

  function deleteEntry(id) {
    const itemToDelete = items.findIndex((element) => element.id === id);
    props.update(itemToDelete);
  }

  function price(num) {
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  function getYear(event) {
    setYear(event.toString());
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onChange={getYear} setYear={year} />
        <ExpensesChart expenses={filteredItems} />
        {expensesContent}
      </Card>
    </>
  );
}

export default Expenses;
