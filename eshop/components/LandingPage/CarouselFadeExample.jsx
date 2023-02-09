import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import style from "./LandingPage.module.scss";
function CarouselFadeExample() {
	return (
		<Carousel fade className={style.carousel}>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.bobswatches.com/rolex-blog/wp-content/uploads/2020/10/Screen-Shot-2021-08-13-at-11.24.45-AM.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>
						Nulla vitae elit libero, a pharetra augue mollis
						interdum.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					width="100px"
					height="100px"
					className="d-block w-100"
					src="https://images.unsplash.com/photo-1612177343582-665b93b34403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNoJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-Gp4lXWmch4wZ9QbOdIyrwpKyHPPSgPefg&usqp=CAU"
					alt="Third slide"
				/>

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

