import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnterdTitle] = useState("");
	const [enteredAmount, setEnterdAmount] = useState("");
	const [enteredDate, setEnterdDate] = useState("");

	//  This is a way to only use useState once to change multiple state changes

	// const [userInput, setUserInput] = useState({
	// 	enterdTitle: "",
	// 	enterdAmount: "",
	// 	enterdDate: "",
	// });

	const titleChangeHandler = (event) => {
		// The comments are 2 ways you can update state. The second version can cause issues in some cases so the third is a more reliable why to insure you get the most accurate state.

		setEnterdTitle(event.target.value);

		// setUserInput({
		// 	...userInput,
		// 	enterdTitle: event.target.value,
		// });

		// setUserInput((prevState) => {
		// 	return { ...prevState, enterdTitle: event.target.value };
		// });
	};

	const amountChandeHandler = (event) => {
		setEnterdAmount(event.target.value);

		// setUserInput({
		// 	...userInput,
		// 	enterdAmount: event.target.value,
		// });
		console.log(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnterdDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enterdDate: event.target.value,
		// });
		console.log(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnterdTitle("");
		setEnterdAmount("");
		setEnterdDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChandeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						step="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={props.onCancel} type="button">
					Cancel
				</button>

				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
