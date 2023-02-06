import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";
import styles from "./ExplorePage.module.scss";
const ExplorePage = () => {
	return (
		<>
		<div>
		
		</div>
			<div className={styles.container}>
				<h1 className={styles.container__heading}>Your Style Your Choice</h1>
				<NavLink className={styles.container__list} to="/explore/divers">
					<img  className={styles.container__list__image} width="400" height="500" src="https://www.grand-seiko.com/au-en/-/media/Images/GlobalEn/GrandSeiko/Home/collections/sport/s3/Main--Visual/s3_sp_MV.jpg" alt="" />
					<p className={styles.container__list__text}>Diver</p>
					
				</NavLink>
				<NavLink className={styles.container__list} to="/explore/dress">
					<img className={styles.container__list__image} width="400" height="500" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1648576744-screen-shot-2022-03-29-at-1-58-08-pm-1648576705.png?crop=0.628xw:0.822xh;0.183xw,0.139xh&resize=480:*" alt="" />
					<p className={styles.container__list__text}>Dress</p>
					
					
				</NavLink>
				<NavLink className={styles.container__list} to="/explore/aviation">
					<img  className={styles.container__list__image} width="400" height="500" src="https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2017/12/mobile-mast-1.jpg" alt="" />
					<p className={styles.container__list__text}>Aviation</p>
					
				</NavLink>
			</div>
            <Outlet/>
			
		</>
	);
};

export default ExplorePage;
