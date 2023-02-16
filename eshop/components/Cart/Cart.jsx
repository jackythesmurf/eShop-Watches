import React from "react";
import { NavLink } from "react-router-dom";
import ItemsCard from "./ItemsCard/ItemsCard.jsx";
import styles from "./Cart.module.scss";
import { useEffect, useState } from "react";
import Summary from "./Summary/Summary.jsx";
export const Cart = ({ cart, setCart }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.container__header}>MY SHOPPING CART</h1>
			<div>
				{cart.map((item, index) => {
					return (
						<ItemsCard item={item} cart={cart} setCart={setCart} />
					);
				})}
			</div>
			<Summary cart={cart}/>
		</div>
	);
};

export default Cart;
