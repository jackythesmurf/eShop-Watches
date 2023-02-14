import db from "./firebase-config.js";
import {
	doc,
	getDocs,
	getDoc,
	addDoc,
	updateDoc,
	setDoc,
	collection,
	deleteDoc,
} from "firebase/firestore";

const removeFromCart = (watch, cart, setCart) => {
	console.log("Remove from Cart");
	setCart(
		cart.map((item) => {
			if (item.Model == watch.Model) {
				const itemQty = watch.quantity;
				if (itemQty == 1) {
					const watchReference = doc(db, "cart", watch.Model);
					const update = async () =>
						await updateDoc(watchReference, {
							quantity: itemQty - 1,
						});
                    update();
                    return {
						...item,
						quantity: 0,
					};
				} else {
					const watchReference = doc(db, "cart", watch.Model);
					const update = async () =>
						await updateDoc(watchReference, {
							quantity: itemQty - 1,
						});
					update();
					return {
						...item,
						quantity: itemQty - 1,
					};
				}
			} else {
				return item;
			}
		})
	);
};

export default removeFromCart;
