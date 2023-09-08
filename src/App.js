import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const Expenses = [
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Food Expenditure",
      expenseAmount: 500,
      LocationOfExpenditure: "India"
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Food Expenditure",
      expenseAmount: 500,
      LocationOfExpenditure: "India"
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Food Expenditure",
      expenseAmount: 500,
      LocationOfExpenditure: "India"
    },
    { expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Food Expenditure",
      expenseAmount: 500,
      LocationOfExpenditure: "India"
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Food Expenditure",
      expenseAmount: 500,
      LocationOfExpenditure: "India"
    }
  ];

  let expenseArr=()=>{
    let x=[];
    for(let i=0;i<100;i++){
      if(Expenses[i]!==undefined){
        x.push(<ExpenseItem 
          expenseDate={Expenses[i].expenseDate.toISOString()} 
          expenseTitle={Expenses[i].expenseTitle} 
          expenseAmount={Expenses[i].expenseAmount} 
          LocationOfExpenditure={Expenses[i].LocationOfExpenditure} />)
      }else{
        x.push(<ExpenseItem 
          expenseDate={""} 
          expenseTitle={""} 
          expenseAmount={""} 
          LocationOfExpenditure={""} />)
          }
      }
     

        return x;
  }

  return (
    <div>
      <h2>Let's get started</h2>
      <h2>Expense Items</h2>
     {
     expenseArr()

        }
      
      
      {/* <ExpenseItem expenseDate={Expenses[0].expenseDate} expenseTitle={Expenses[0].expenseTitle} expenseAmount={Expenses[0].expenseAmount} LocationOfExpenditure={Expenses[0].LocationOfExpenditure} /> */}
      {/* <ExpenseItem /> */}
    </div>
  );
}

export default App;
