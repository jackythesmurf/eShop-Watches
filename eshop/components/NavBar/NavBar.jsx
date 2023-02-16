import React from "react";
import { NavLink } from "react-router-dom";
import watchLogo from "./img/Watch_Your_Watches.svg";
import styles from "./NavBar.module.scss";

const NavBar = () => {
	return (
		<nav className={styles.container}>
			<p className={styles.container__logo}>
				<NavLink to="/">
					<img src={watchLogo} alt="" />
				</NavLink>
			</p>

			<div className={styles.container__links}>
				<NavLink className={styles.container__links__link}  to="/explore">Explore</NavLink>
			
				<NavLink className={styles.container__links__link} to="/cart">Cart</NavLink>
			</div>
		</nav>
	);
};

export default NavBar;
