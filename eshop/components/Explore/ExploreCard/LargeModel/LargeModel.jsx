import React from "react";
import styles from "./LargeModel.module.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Variants from "./Variants/Variants.jsx";

const LargeModel = ({ watchSortedData }) => {
	const [loading, setLoading] = useState(false);
	const { style, model } = useParams();
	let matchingWatch;
	const largeWatchDetails = watchSortedData[style].map((watch, index) => {
		if (watch.Model === model) {
			matchingWatch = index;
			return watch;
		}
	})[matchingWatch];

	return (
		<div>
			{loading ? (
				<div>loading...</div>
			) : (
				<div>
					<div>
						<img src={largeWatchDetails.imgURL} alt="" />
					</div>
					<div>
						<h1>{largeWatchDetails.Name}</h1>
						<p>{largeWatchDetails.Model}</p>
						<p>{largeWatchDetails.Price}</p>
						<button>Add to Cart</button>
						<p>{largeWatchDetails.Dimension}</p>
						<p>{largeWatchDetails.Movement}</p>
						<p>{largeWatchDetails["Dial Colour"]}</p>
						<div>
							<Variants
								largeWatchDetails={largeWatchDetails}
								watchSortedData={watchSortedData}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default LargeModel;
