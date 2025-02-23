import React from 'react';

const LoadMoreBtn = ({onClick}) => {
	return (
		<div>
			<button type="button" onClick={onClick}>Load more</button>
		</div>
	);
};

export default LoadMoreBtn;