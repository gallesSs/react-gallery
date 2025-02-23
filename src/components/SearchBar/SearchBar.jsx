import {Field, Form, Formik} from "formik";
import s from './SearchBar.module.css'
import {FaSearch} from "react-icons/fa";

const INITIAL_VALUES = {
	query: ""
};

const SearchBar = ({onSubmit}) => {
	return (<header className={s.header}>
		<Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
			<Form>
				<div className={s.inputContainer}>
					<Field
						className={s.input}
						type="text"
						name="query"
						autoComplete="off"
						autoFocus
						placeholder="Search for images"
					/>

				<button type="submit"><FaSearch/></button>
					</div>
			</Form>
		</Formik>
	</header>);
};

export default SearchBar;
