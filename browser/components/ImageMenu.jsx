import React from 'react';

import products from '../utils/products';

const ImageMenu = (props) => {
	console.log('products', products)
	return (
		<div className="image-menu">
			{ products.map((product, i) => {
				return (
					<div key={i} className="image-sm-container" onClick={props.onClick}>
						<img src={product.thumbnail} name={i} />
					</div>
				)
			})
		}
		</div>
	)
};

export default ImageMenu;
