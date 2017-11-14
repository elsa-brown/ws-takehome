import React from 'react';

const Modal = (props) => {
	let showOrHide = props.showModal ? 'show' : 'hide';

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
						<li id="modal-item-name">Williams Sonoma Classic Apron, French Blue</li>
						<li>Qty: 1</li>
						<li>Subtotal: $19.95</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Modal;
