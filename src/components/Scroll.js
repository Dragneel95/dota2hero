import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll' , border:'1px solid trasnparent' ,height: '500px'}}>

		{props.children}

		</div>
		);

};

export default Scroll;