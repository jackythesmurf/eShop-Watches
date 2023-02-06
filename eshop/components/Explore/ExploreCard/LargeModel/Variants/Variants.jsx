import React from "react";
import { NavLink, useParams } from "react-router-dom";

const Variants = ({ largeWatchDetails, watchSortedData }) => {
	const { style, model } = useParams();
	const watchVariants = watchSortedData[
		largeWatchDetails.Style.toLowerCase()
	].map((watch) => {
		if (watch.Name === largeWatchDetails.Name) {
			return watch;
		}
	});
	return (
		<div>
			{watchVariants.map((watch, index) => {
				return (
					<NavLink to={`/explore/${style}/${watch.Model}`}>
						<img width="100" src={watch.imgURL} alt="" />
					</NavLink>
				);
			})}
		</div>
	);
};

export default Variants;
