import React from 'react';

import products from '../utils/products';

const ImageMenu = (props) => {
	return (
		<div className="image-menu">
			{ products.map((product, i) => {
				return (
					<div key={i} className="image-sm-container" onClick={props.selectProduct}>
						<img src={product.thumbnail} name={i} />
					</div>
				)
			})
		}
		</div>
	)
};

export default ImageMenu;
