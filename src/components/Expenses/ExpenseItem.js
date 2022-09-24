import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card.js";
import ExpenseDate from "../Expenses/ExpenseDate.js";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // console.log(props);

  const clickHanler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHanler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
