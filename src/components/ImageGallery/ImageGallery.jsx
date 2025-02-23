import s from "./ImageGallery.module.css"
import ImageCard from './ImageCard.jsx';

const ImageGallery = ({results, openModal}) => {
	return <ul className={s.list}>
		{results.map(item => {
			return (
				<li key={item.id}><ImageCard src={item.urls.small} alt={item.description}
																		 onClick={() => openModal(item.urls.full)}/></li>
			)
		})}
	</ul>;
};

export default ImageGallery;
