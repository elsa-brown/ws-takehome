import React from 'react';

import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';

const ProductContainer = () => {
	return (
		<div className="product-container col-sm-12">
			<div>ProductContainer</div>
			<ProductImage />
			<ProductDescription />
		</div>
	)
}

export default ProductContainer;
