import React, { useState } from "react";
import AddNewExpense from "./AddNewExpense";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};
	const [addNewExpense, setAddNewExpense] = useState(true);
	const addNewExpenseHandler = (click) => {
		setAddNewExpense(click);
	};

	if (addNewExpense === true) {
		return (
			<div className="new-expense">
				<AddNewExpense click={addNewExpenseHandler} />
			</div>
		);
	}

	return (
		<div className="new-expense">
			<ExpenseForm
				onSaveExpenseData={saveExpenseDataHandler}
				click={addNewExpenseHandler}
			/>
		</div>
	);
};

export default NewExpense;
