import React from "react";
import {NavLink}  from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<NavLink to='/explore'>Explore</NavLink>
			<NavLink to='/favourites'>Favourites</NavLink>
			<NavLink to='/cart'>Cart</NavLink>
		</nav>
	);
};

export default NavBar;
