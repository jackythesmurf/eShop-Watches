import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const ExploreCard = ({ watchData }) => {
	return (
		<div>
			<NavLink
				to={`/explore/${watchData.Style.toLowerCase()}/${watchData.Model}`}
			>
				<img src={watchData.imgURL} alt={watchData.Name} />
			</NavLink>
		</div>
	);
};

export default ExploreCard;
