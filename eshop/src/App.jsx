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

import LargeModel from "../components/Explore/ExploreCard/LargeModel/LargeModel.jsx";
import CarouselFadeExample from "../components/LandingPage/CarouselFadeExample.jsx";
import db from "./services/firebase-config.js";
import { doc, getDocs, collection } from "firebase/firestore";
import fetchWatchData from "./services/fetchWatch.js";
import fetchCart from "./services/fetchCart.js"

function App() {
	const [watchSortedData, setWatchSortedData] = useState({});
	const [loading, setLoading] = useState(true);
	const [cart, setCart] = useState([])
	if (loading){
		fetchCart(setCart)
		fetchWatchData(setWatchSortedData, setLoading)
	}
	return (
		<BrowserRouter>
			<NavBar />

			{loading ? (
				<div>loading...</div>
			) : (
				<Routes>
					<Route path="/explore" element={<ExplorePage />}></Route>
					<Route
						path="/explore/:style"
						element={
							<ExploreList watchSortedData={watchSortedData} />
						}
					/>
					<Route path="/favourites" element={<Favourites />} />
					<Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
					<Route
						path="/explore/:style/:model"
						element={
							<LargeModel watchSortedData={watchSortedData} cart={cart} setCart={setCart} />
						}
					/>
					<Route path="/" element={<CarouselFadeExample />} />
				</Routes>
			)}
		</BrowserRouter>
	);
}

export default App;
