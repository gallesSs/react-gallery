import {BallTriangle} from 'react-loader-spinner'
import s from "./Loader.module.css"

const Loader = () => {
	return (
		<div className={s.loader}>
			<BallTriangle
				height={100}
				width={100}
				radius={5}
				color="#4fa94d"
				ariaLabel="ball-triangle-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div>
	);
};

export default Loader;