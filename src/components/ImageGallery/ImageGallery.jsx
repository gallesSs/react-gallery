import React from "react";
import ImageCard from './ImageCard.jsx';

const ImageGallery = ({results, openModal}) => {
	return <ul>
		{results.map(item => {
			return (
				<li key={item.id}><ImageCard src={item.urls.small} alt={item.description}
																		 onClick={() => openModal(item.urls.full)}/></li>
			)
		})}
	</ul>;
};

export default ImageGallery;
