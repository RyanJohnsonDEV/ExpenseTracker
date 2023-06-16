import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

function ExpenseItem(props) {
  function deleteEntry() {
    props.delete(props.id);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <h2>
          <i onClick={deleteEntry} className="fa-solid fa-trash-can"></i>
        </h2>
      </div>
    </Card>
  );
}

export default ExpenseItem;
