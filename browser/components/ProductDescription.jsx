import React from 'react';

const ProductDescription = () => {
	return (
		<div className="product-description-container col-sm-4">
			<h4>Williams-Sonoma Classic Apron, French Blue</h4>
			<p>A generously sized apron is a necessity in any kitchen, and ours will brighten yours with lively color. Sewn of thick cotton, it can be personalized or monogrammed with up to nine characters, all the same height, embroidered in your choice of colors. An apron of this quality makes a welcome gift for any cook.</p>
			<ul>
				<li>Durable 100% cotton construction.</li>
				<li>Adjustable neckband ensures a good fit.</li>
				<li>Roomy front pockets hold small tools.</li>
				<li>Machine-wash.</li>
			</ul>
			<h3>$19.95</h3>
			<div className="qty-select">Select</div>
		</div>
	)
}

export default ProductDescription;
