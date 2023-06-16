import { useState, useRef } from "react";
import "./ExpenseForm.css";
import Modal from "../UI/Modal";

function ExpenseForm(props) {
  let userInput = {
    title: "",
    price: "",
    date: "",
  };

  const formTitle = useRef();
  const formPrice = useRef();
  const formDate = useRef();

  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  function submitForm(event) {
    event.preventDefault();
    if (
      formTitle.current.value === "" ||
      formPrice.current.value === "" ||
      formDate.current.value === ""
    ) {
      setTitle("Input Error");
      setMessage("Please fill out all fields.");
    } else if (formPrice.current.value < 0) {
      setTitle("Price Error");
      setMessage("Please enter a valid price.");
    } else {
      userInput.title = formTitle.current.value;
      userInput.date = new Date(formDate.current.value + "T00:00:00");
      userInput.price = Number(formPrice.current.value);
      props.onSave(userInput);
    }
  }

  function loadTestData() {
    const testData = [
      {
        title: "Car Insurance",
        date: new Date(2023, 2, 28),
        price: 69.42,
      },
      {
        title: "Food",
        date: new Date(2023, 6, 5),
        price: 150.32,
      },
      {
        title: "Netflix",
        date: new Date(2022, 10, 12),
        price: 12.47,
      },
      {
        title: "Internet",
        date: new Date(2021, 4, 15),
        price: 85.4,
      },
      {
        title: "Computer Parts",
        date: new Date(2022, 6, 11),
        price: 325.6,
      },
      {
        title: "Phone Plan",
        date: new Date(2023, 1, 1),
        price: 230,
      },
      {
        title: "Clothes",
        date: new Date(2021, 8, 17),
        price: 126.99,
      },
      {
        title: "Desk",
        date: new Date(2022, 9, 25),
        price: 199,
      },
      {
        title: "Travel",
        date: new Date(2023, 5, 4),
        price: 350.75,
      },
    ];

    testData.forEach((element) => {
      props.onSave(element);
    });
  }

  function reset() {
    setMessage("");
    setTitle("");
  }

  return (
    <form onSubmit={submitForm}>
      <Modal title={title} message={message} reset={reset} />
      <div className="addExpense-controls">
        <div className="control">
          <label>Title</label>
          <input type="text" placeholder="Food" ref={formTitle} />
        </div>
        <div className="control">
          <label>Price</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            placeholder="10.00"
            ref={formPrice}
          />
        </div>
        <div className="control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" ref={formDate} />
        </div>
      </div>
      <div className="addExpense-actions">
        <button className="dummyData" onClick={loadTestData}>
          Load Testing Data
        </button>
        <button className="cancelBtn" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
