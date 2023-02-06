import React from "react";
import ExploreCard from "../ExploreCard/ExploreCard.jsx";
import { useState, useEffect } from "react";
import FetchWatchData from "../../FetchWatchData/FetchWatchData.jsx";
import { useParams } from "react-router-dom";
import styles from "./ExploreList.module.scss";

const ExploreList = ({ watchSortedData }) => {
	const [loading, isLoading] = useState(false);

	const { style } = useParams();

	const styleImg = {
		divers: [
			"https://www.longines.com/media/catalog/product/cache/97f45038bd9818f82dbb29a471dd20cb/h/y/hydroconquest-l3-782-4-96-6-detailed-view-2000x2000-105-1667517491.jpg",
			"https://www.longines.com/media/catalog/product/cache/97f45038bd9818f82dbb29a471dd20cb/t/h/the-longines-legend-diver-watch-l3-374-4-80-0-detailed-view-2000x2000-107-1667514219.jpg",
		],
		dress: [
			"https://www.longines.com/media/catalog/product/cache/97f45038bd9818f82dbb29a471dd20cb/t/h/the-longines-master-collection-l2-357-4-78-6-detailed-view-2000x2000-102-1667550651.jpg",
			"https://www.longines.com/media/catalog/product/cache/97f45038bd9818f82dbb29a471dd20cb/l/a/la-grande-classique-de-longines-l4-209-1-97-8-detailed-view-2000x2000-102-1667490410.jpg",
		],
		aviation: [
			"https://www.longines.com/media/catalog/product/cache/97f45038bd9818f82dbb29a471dd20cb/l/o/longines-spirit-l3-812-4-53-2-detailed-view-2000x2000-102-1667544745.jpg",
			"https://www.longines.com/media/catalog/product/cache/97f45038bd9818f82dbb29a471dd20cb/l/o/longines-spirit-l3-410-4-93-0-detailed-view-2000x2000-101-1667544706.jpg",
		],
	};

	return (
		<div className={styles.container}>
			<div className={styles[style]}>
				<p>{style.toLocaleUpperCase()}</p>
			</div>
			{loading ? (
				<div>loading...</div>
			) : (
				<div className={styles.container__card}>
					<img
						height="350"
						className={styles.container__cardimg}
						src={styleImg[style][0]}
						alt={style}
					/>
					{watchSortedData[style].map((watch, index) => {
						return (
							<>
								{index == 4 ? (
									<img
										height="350"
										className={styles.container__cardimg}
										src={styleImg[style][1]}
										alt={style}
									/>
								) : null}
								<ExploreCard
									watchData={watch}
									key={watch.Model}
								/>
							</>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default ExploreList;
