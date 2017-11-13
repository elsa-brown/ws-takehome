import React from 'react';

const Breadcrumbs = (props) => {
	return (
		<ul className="breadcrumbs">
			<li>Home</li>
			<li>></li>
			<li>Homekeeping</li>
			<li>></li>
			<li>Aprons</li>
			<li>></li>
			<li>Adult Aprons</li>
			<li>></li>
			<li id="selected-product">Williams-Sonoma Classic Apron, {props.color}</li>
		</ul>
	)
}

export default Breadcrumbs;
