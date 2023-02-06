import React from "react";
import styles from "./LargeModel.module.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Variants from "./Variants/Variants.jsx";

const LargeModel = ({ watchSortedData }) => {
	const { style, model } = useParams();
	let matchingWatch;
	const largeWatchDetails = watchSortedData[style].map((watch, index) => {
		if (watch.Model === model) {
			matchingWatch = index;
			return watch;
		}
	})[matchingWatch];

	return (
		<div className={styles.container}>
			<div className={style.container__display}>
				<img height="600" className={style.img} src={largeWatchDetails.imgURL} alt="" />
			</div>
			<div className={styles.container__details}>
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
	);
};

export default LargeModel;
