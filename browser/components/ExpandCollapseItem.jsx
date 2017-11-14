import React from 'react';

import arrowExpanded from '../../public/assets/arrow-expanded.png';
import arrowCollapsed from '../../public/assets/arrow-collapsed.png';

const ExpandCollapseItem = (props) => {

	let collapseOrExpand = (props.id === props.expandedItem) ? 'expand' : 'collapse';

	return (
		<div className="item-container" onClick={props.toggleItem}>
			<div className={`collapsed ${collapseOrExpand}`} id={props.id}>
				<div className="item-header">
					<img src={arrowCollapsed} />
					<h5>collapsed</h5>
				</div>
			</div>
			<div className={`expanded ${collapseOrExpand}`} id={props.id}>
				<div className="item-header">
					<img src={arrowExpanded} />
					<h5>Expanded</h5>
				</div>
				<p>This section is expanded. This section can be collapsed by clicking on the "Expanded" text. This section is expanded. This section can be collapsed by clicking on the "Expanded" text.</p>
			</div>
		</div>
	)
}

export default ExpandCollapseItem;
