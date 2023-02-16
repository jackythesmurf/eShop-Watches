import React from "react";
import addToCart from "../../../src/services/addToCart.js";
import removeFromCart from "../../../src/services/removeFromCart.js";
import { useEffect, useState } from "react";
import styles from "./ItemsCard.module.scss";
const ItemsCard = ({ item, cart, setCart }) => {
	const handleIncrement = () => {
		addToCart(item, cart, setCart);
	};
	const handleDecrement = () => {
		removeFromCart(item, cart, setCart);
	};

	return (
		<div>
			{item.quantity > 0 ? (
				
				<div className={styles.container}>
					<div className={styles.container__imgContainer}>
						<img
							className={styles.container__imgContainer__img}
							src={item.imgURL}
							alt=""
						/>
					</div>
					<div className={styles.container__details}>
						<h3>{item.Name}</h3>
						<p>{item.Model}</p>
						<p>${item.Price}</p>
						<p>qty: {item.quantity}</p>
						<button onClick={handleIncrement}>Add quantity</button>
						<button onClick={handleDecrement}>Remove quantity</button>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default ItemsCard;
