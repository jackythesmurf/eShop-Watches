import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	BrowserRouter,
	Routes,
	Route,
	Router,
	RouterProvider,
} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

import ExplorePage from "../components/Explore/ExplorePage.jsx";
import ExploreCard from "../components/Explore/ExploreCard/ExploreCard.jsx";
import ExploreList from "../components/Explore/ExploreList/ExploreList.jsx";
import Favourites from "../components/Favourites/Favourites.jsx";
import Cart from "../components/Cart/Cart.jsx";
import FetchWatchData from "../components/FetchWatchData/FetchWatchData.jsx";
import LargeModel from "../components/Explore/ExploreCard/LargeModel/LargeModel.jsx";

import db from "./firebase-config.js";
import { doc, getDocs, collection } from "firebase/firestore";

function App() {
	const [watchSortedData, setWatchSortedData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
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
			console.log(watchSortedData);
			
			setLoading(false);
		};
		getWatchData();
	}, []);
	return (
		<BrowserRouter>
			<NavBar />

			{loading ? (
				<div>loading...</div>
			) : (
				<Routes>
					<Route path="/explore" element={<ExplorePage />}>
						<Route
							path="/explore/:style"
							element={
								<ExploreList
									watchSortedData={watchSortedData}
								/>
							}
						/>
					</Route>
					<Route path="/favourites" element={<Favourites />} />
					<Route path="/cart" element={<Cart />} />
					<Route
						path="/explore/:style/:model"
						element={
							<LargeModel
								
								watchSortedData={watchSortedData}
							/>
						}
					/>
				</Routes>
			)}
		</BrowserRouter>
	);
}

export default App;
