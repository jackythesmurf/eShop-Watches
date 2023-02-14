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

const fetchCart = async (setCart) => {
	const cartCollection = collection(db, "cart");
	const cartData = await getDocs(cartCollection);
	let cartDataArray = [];
	cartData.forEach((doc) => {
		cartDataArray.push(doc.data());
	});
	setCart(cartDataArray);
	
};
export default fetchCart;
