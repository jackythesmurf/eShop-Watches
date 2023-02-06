import React from "react";
import styles from "./ExploreCard.module.scss";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const ExploreCard = ({ watchData }) => {
	return (
		<div className={styles.container}>
			<NavLink  className={styles.navbar}
				to={`/explore/${watchData.Style.toLowerCase()}/${
					watchData.Model
				}`}
			>
				<div className={styles.container__list}>
					<p className={styles.container__list__contimage}>
						<img
							className={styles.container__list__image}
							src={watchData.imgURL}
							alt={watchData.Name}
						/>
					</p>
					<div className={styles.container__list__text}>
						<h3 className={styles.container__list__text__name}>
							{watchData.Name}
						</h3>
						<p className={styles.container__list__text__price}>
							${watchData.Price}
						</p>
					</div>
				</div>
			</NavLink>
		</div>
	);
};

export default ExploreCard;
