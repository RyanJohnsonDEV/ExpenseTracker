import Expenses from './components/Expenses/Expenses.js';
import AddExpense from './components/AddExpense/AddExpense.js';
import { useState } from 'react';

const items = [];

function App() {
  const [list, updateList] = useState(items);
  function addExpense(expense) {
    updateList((prevList) => {
      return [expense, ...prevList];
    });
  }

  function update(index) {
    list.splice(index, 1);
    updateList([...list]);
  }

  return (
    <div className="App">
      <AddExpense onSave={addExpense} list={items} />
      <Expenses update={update} items={list} />
    </div>
  );
}

export default App;
