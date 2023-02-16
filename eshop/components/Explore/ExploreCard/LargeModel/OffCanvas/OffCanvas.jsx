import React, { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./OffCanvas.module.scss";

function OffCanvas({handleCart, watchImg}) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<button
				className={styles.addToCart}
				variant="primary"
				onClick={handleShow}
			>
				Add to Cart
			</button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Confirm Your Purchase</Offcanvas.Title>
				</Offcanvas.Header>
                <img src={watchImg} alt="" />
				<Offcanvas.Body>
                    
					<p>
						If you like this watch, I bet your will like my other projects !
                        You can view them at my github profile at <a href="https://github.com/jackythesmurf">here</a>
					</p>
					<button onClick={ () => {handleClose(); handleCart();}} className={styles.addToCart}>Add to Cart</button>
				</Offcanvas.Body>
                
			</Offcanvas>
		</>
	);
}

export default OffCanvas;
