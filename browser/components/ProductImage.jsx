import React from 'react';

import ImageMenu from './ImageMenu';

// import image from '../../public/assets/product-large-a.jpg';

const ProductImage = (props) => {
	console.log('ProductImage props', props)
	return (
		<div className="product-image-container col-sm-7">
			<div className="hero-container">
				<img src={props.hero} className="hero" />
			</div>
		<ImageMenu onClick={props.onClick} />
		</div>
	)
}

export default ProductImage;
