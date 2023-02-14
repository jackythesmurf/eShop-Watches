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
const fetchWatchData = (setWatchSortedData, setLoading) => {
    console.log("Fetch Watch Data")
	const getWatchData = async () => {
		const watchCollection = collection(db, "watch");
		const watchData = await getDocs(watchCollection);

		let watchSortedData = {
			divers: [],
			dress: [],
			aviation: [],
		};
		watchData.forEach((doc) => {
			if (doc.data().Style === "Divers") {
				watchSortedData.divers.push(doc.data());
			} else if (doc.data().Style === "Dress") {
				watchSortedData.dress.push(doc.data());
			} else if (doc.data().Style === "Aviation") {
				watchSortedData.aviation.push(doc.data());
			}
		});
		setWatchSortedData(watchSortedData);
		setLoading(false);
		return;
	};

	return getWatchData();
};

export default fetchWatchData;
