import React from 'react';

import ImageMenu from './ImageMenu';

const ProductImage = (props) => {
	return (
		<div className="product-image-container col-sm-7">
			<div className="hero-container">
				<img src={props.hero} className="hero" />
			</div>
		<ImageMenu selectProduct={props.selectProduct} />
		</div>
	)
}

export default ProductImage;
