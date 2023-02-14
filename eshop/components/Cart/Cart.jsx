import React from "react";
import { NavLink } from "react-router-dom";
import ItemsCard from "./ItemsCard/ItemsCard.jsx";

import { useEffect, useState } from "react";

export const Cart = ({ cart, setCart }) => {
	const [updating, setUpdating] = useState(false);
	return (
		<div>
			{updating ? 
				 console.log(cart)
			 : (
				<div>
					{cart.map((item, index) => {
						return (
							<ItemsCard
								item={item}
								cart={cart}
								setCart={setCart}
								updating={updating}
								setUpdating={setUpdating}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Cart;
