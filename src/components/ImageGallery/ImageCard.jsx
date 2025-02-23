import React from "react";

const ImageCard = ({src, alt, onClick}) => {
	return (
		<div>
			<img src={src} alt={alt} onClick={onClick}/>
		</div>
	);
};

export default ImageCard;
