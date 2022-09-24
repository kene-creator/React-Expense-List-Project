import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString(navigator.language, {
    month: "long",
  });
  const day = props.date.toLocaleString(navigator.language, {
    day: "2-digit",
  });
  const year = props.date.toLocaleString(navigator.language, {
    year: "numeric",
  });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
