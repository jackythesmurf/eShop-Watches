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

const addToCart = (watch, cart, setCart) => {
    
	const watchIndex = cart.findIndex(item => watch.Model == item.Model);
   
	const watchReference = doc(db, "cart", watch.Model);
	if (watchIndex === -1) {
		const add = async () =>
			await setDoc(watchReference, {
				...watch,
				quantity: 1,
			});
		add();
		setCart(current => [...current, watch])
	} else {
		const itemQty = cart[watchIndex].quantity;
		const increQty = async () => {
			await updateDoc(watchReference, {
				...watch,
				quantity: itemQty + 1,
			});
		};
		console.log("wathc index EXISTS")
		increQty();
		setCart(
			cart.map((item, index) => {
                
				if (index == watchIndex) {
					return {
						...watch,
						quantity: itemQty + 1,
					};
				}
                else {
                    return item
                }
			})
		);
		
	}console.log("Add to Cart");
  
};
export default addToCart;
