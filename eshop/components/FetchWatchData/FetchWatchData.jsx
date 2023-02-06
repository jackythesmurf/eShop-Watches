import React from "react";
import { useState, useEffect, useRef } from "react";
import db from "../../src/firebase-config.js";
import { doc, getDocs, collection } from "firebase/firestore";

const FetchWatchData = () => {
	const watchCollection = collection(db, "watches");
	const watchData =  getDocs(watchCollection);
	const watchSortedData = {
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
	return watchSortedData
};

export default FetchWatchData;
