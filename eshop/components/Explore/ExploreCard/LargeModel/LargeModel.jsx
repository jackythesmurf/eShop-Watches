import React from "react";
import styles from "./LargeModel.module.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Variants from "./Variants/Variants.jsx";
import addToCart from "../../../../src/services/addToCart.js"
import OffCanvas from "./OffCanvas/OffCanvas.jsx";
const LargeModel = ({ watchSortedData, cart, setCart }) => {
	const { style, model } = useParams();
	const [added, setAdded] = useState(false);
	let matchingWatch;
	const largeWatchDetails = watchSortedData[style].map((watch, index) => {
		if (watch.Model === model) {
			matchingWatch = index;
			return watch;
		}
	})[matchingWatch];

	const handleClick = () => {
		addToCart(largeWatchDetails, cart, setCart)
		setAdded(true)
	}

	return (
		<div className={styles.container}>
			{added ? <div className={styles.container__banner}>Added to cart, checkout now ✓</div> : ""}
			<div className={styles.container__display}>
				<img height="600" className={styles.container__display__img} src={largeWatchDetails.imgURL} alt="" />
			</div>
			<div className={styles.container__details}>
				<h1><span className={styles.text__highlights}>{largeWatchDetails.Name}</span></h1>
				<p><span>{largeWatchDetails.Model}</span></p>
				<p><span>${largeWatchDetails.Price}</span></p>
				<OffCanvas handleCart={handleClick} watchImg={largeWatchDetails.imgURL}/>
				
				<p><span className={styles.text__highlights}>Dimensions:</span> {largeWatchDetails.Dimension}</p>
				<p><span className={styles.text__highlights}>Movement Type:</span> {largeWatchDetails.Movement}</p>
				<p><span className={styles.text__highlights}>Dial Colour:</span> {largeWatchDetails["Dial Colour"]}</p>
				<div>
					<br />
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
