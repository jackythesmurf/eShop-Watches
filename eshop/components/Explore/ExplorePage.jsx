import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";

const ExplorePage = () => {
	return (
		<>
			<h1>Explore</h1>
            
			<div>
				<NavLink to="/explore/divers">Divers</NavLink>
				<NavLink to="/explore/dress">Dress</NavLink>
				<NavLink to="/explore/aviation">Aviation</NavLink>
			</div>
            <Outlet/>
			
		</>
	);
};

export default ExplorePage;
