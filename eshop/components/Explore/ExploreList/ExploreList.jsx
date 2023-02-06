import React from "react";
import ExploreCard from "../ExploreCard/ExploreCard.jsx";
import { useState, useEffect } from "react";
import FetchWatchData from "../../FetchWatchData/FetchWatchData.jsx";
import { useParams } from "react-router-dom";

const ExploreList = ({watchSortedData}) => {
	const [loading, isLoading] = useState(false);

	const { style } = useParams();

	
	

	useEffect(() => {
		// console.log(watchData);
	}, []);
	

	return (
		<div>
			{loading ? (
				<div>loading...</div>
			) : (
				<div>
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
