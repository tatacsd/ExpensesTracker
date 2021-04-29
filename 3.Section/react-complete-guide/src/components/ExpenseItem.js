import './ExpenseItem.css'

function ExpenseItem() {
  // variables
  const expenseDate= new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div >{expenseDate.toISOString}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>      
    </div>
  );
}

// to use the component outside of the file we need to export it
export default ExpenseItem;
