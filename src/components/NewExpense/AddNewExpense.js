import React from "react";

const AddNewExpense = (props) => {
	const AddNewExpenseHandled = () => {
		props.click(false);
	};
	return (
		<div>
			<button onClick={AddNewExpenseHandled} type="submit">
				Add New Expense
			</button>
		</div>
	);
};

export default AddNewExpense;
