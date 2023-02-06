import React from "react";
import ExploreCard from "../ExploreCard/ExploreCard.jsx";
import { useState, useEffect } from "react";
import FetchWatchData from "../../FetchWatchData/FetchWatchData.jsx";
import { useParams } from "react-router-dom";
import styles from "./ExploreList.module.scss";

const ExploreList = ({watchSortedData}) => {
	const [loading, isLoading] = useState(false);

	const { style } = useParams();

	

	

	return (
		<div className={styles.container}>
			<div className={styles[style]}>
				<p>{style.toLocaleUpperCase()}</p>
			</div>
			{loading ? (
				<div>loading...</div>
			) : (

				<div className={styles.container__card}>
					{watchSortedData[style].map((watch) => {
						return (
							<ExploreCard
								watchData={watch}
								key={watch.Model}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default ExploreList;
