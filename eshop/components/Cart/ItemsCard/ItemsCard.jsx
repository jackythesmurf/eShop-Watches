import React from "react";
import addToCart from "../../../src/services/addToCart.js";
import removeFromCart from "../../../src/services/removeFromCart.js";
import { useEffect, useState } from "react";

const ItemsCard = ({ item, cart, setCart, updating, setUpdating }) => {
	const handleIncrement = () => {
		addToCart(item, cart, setCart, setUpdating);
	};
	const handleDecrement = () => {
		removeFromCart(item, cart, setCart, setUpdating);
		const updateInterval = setInterval(() => {
			setUpdating(false);
			clearInterval(updateInterval);
		}, 1000);
	};

	return (
		<div>
			{item.quantity > 0 ? (
				<div>
					<img src={item.imgURL} alt="BRUH" />
					<h1>{item.Name}</h1>
					<p>{item.Model}</p>
					<p>{item.Price}</p>
					<p>{item.quantity}</p>
					<button onClick={handleIncrement}>+</button>
					<button onClick={handleDecrement}>-</button>
					
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default ItemsCard;
