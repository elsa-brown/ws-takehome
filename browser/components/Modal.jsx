import React from 'react';

const Modal = (props) => {

	let showOrHide = props.showModal ? 'show' : 'hide';
	let subtotal = parseFloat(props.qty * props.price).toFixed(2);

	return (
		<div className={`modal ${showOrHide}`} onClick={props.toggleModal}>
			<div className="exit">x</div>
			<h4>Item(s) added to your cart:</h4>
			<hr />
			<div className="modal-container">
				<div className="modal-product-image col-sm-4">
					<img src={props.thumbnail} />
				</div>
				<div className="modal-product-details col-sm-8">
					<ul>
						<li id="modal-item-name">Williams-Sonoma Classic Apron, {props.color}</li>
						<li>Qty: {props.qty}</li>
						<li>Subtotal: ${subtotal}</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Modal;
