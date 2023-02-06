import styles from "./Variants.module.scss";
import React from "react";
import { NavLink, useParams } from "react-router-dom";

const Variants = ({ largeWatchDetails, watchSortedData }) => {
	const { style, model } = useParams();
	const watchVariants = watchSortedData[
		largeWatchDetails.Style.toLowerCase()
	].filter((watch) => {
		if (watch.Name === largeWatchDetails.Name) {
			return watch;
		}
	});
	console.log('====================================');
	console.log(watchVariants);
	console.log('====================================');


	return (
		<div>
			{watchVariants.map((watch, index) => {
				return (
					<NavLink key={index} to={`/explore/${style}/${watch.Model}`}>
						<img width="100" src={watch.imgURL} alt="" />
					</NavLink>
				);
			})}
		</div>
	);
};

export default Variants;
