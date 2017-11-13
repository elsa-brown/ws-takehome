import React from 'react';

const links = [`Cookware`, `Cook's Tools`, `Cutlery`, `Electrics`, `Bakeware`, `Food`, `Tabletop & Bar`, `Homekeeping`, `Outdoor`, `Sale`]

const NavBar = () => {
	return (
		<div className="nav-container">
				{links.map((link, idx) => {
					return (
						<div key={idx} className="nav-item">
							<p>{ link }</p>
						</div>
					)
				})}
			<div className="nav-item" id="nav-ws-home">
				<p>Williams-Sonoma Home</p>
			</div>
		</div>
	)
}

export default NavBar;
