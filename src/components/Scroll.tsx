import React from 'react';

interface IScroll {
	children?: JSX.Element
}

const Scroll = (props: IScroll) => {
	return (
		<div style={{overflowY: 'scroll', border: '1px solid black', height: '375px'}}>
			{props.children}
		</div>
	)
}

export default Scroll;
