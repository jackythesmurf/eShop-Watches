import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import style from "./LandingPage.module.scss";
function CarouselFadeExample() {
	return (
		<Carousel fade className={style.container}>
			<Carousel.Item>
				<div className={style.carousel1}></div>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>
						Nulla vitae elit libero, a pharetra augue mollis
						interdum.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<div className={style.carousel2}></div>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<div className={style.carousel3}></div>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl
						consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselFadeExample;
