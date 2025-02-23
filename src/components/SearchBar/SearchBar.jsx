import {Field, Form, Formik} from "formik";
import React from "react";

const INITIAL_VALUES = {
	query: ""
};

const SearchBar = ({onSubmit}) => {
	return (
		<header>
			<Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
				<Form>
					<Field
						type="text"
						name="query"
						autoComplete="off"
						autoFocus
						placeholder="Search for images"
					/>
					<button type="submit">Search</button>
				</Form>
			</Formik>
		</header>
	);
};

export default SearchBar;
