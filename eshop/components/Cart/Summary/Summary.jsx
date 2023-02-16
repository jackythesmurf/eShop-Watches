import React from "react";
import styles from "./Summary.module.scss";
const Summary = ({ cart }) => {
	// display total price
	// write code to display total quantity
	const total = cart.reduce((acc, item) => {
		return item.quantity > 0
			? acc + parseInt(item.Price.replace(",", "")) * item.quantity
			: acc;
	}, 0);
	const totalQuantity = cart.reduce((acc, item) => {
		return item.quantity > 0 ? acc + item.quantity : acc;
	}, 0);
	return (
		<div className={styles.container}>
			<h1 className={styles.container__header}>Summary</h1>
			<div  className={styles.container__details}>
				<p>Total Price: ${total}</p>
				<p>Total Items: {totalQuantity}</p>
			</div>
		</div>
	);
};

export default Summary;
