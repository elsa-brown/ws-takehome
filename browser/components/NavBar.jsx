import React from 'react';

const links = [`Cookware`, `Cook's Tools`, `Cutlery`, `Electrics`, `Bakeware`, `Food`, `Tabletop & Bar`, `Homekeeping`, `Outdoor`, `Sale`]

const NavBar = () => {
	return (
		<div className="nav-container">
				{links.map((link, idx) => {
					return (
						<div key={idx} className="nav-item">
							<h6>{ link }</h6>
						</div>
					)
				})}
			<div className="nav-item" id="nav-ws-home">
				<h6>Williams-Sonoma Home</h6>
			</div>
		</div>
	)
}

export default NavBar;
