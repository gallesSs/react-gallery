import "./App.css";
import React, {useEffect, useState} from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import {fetchData} from './services/api.js';
import toast from 'react-hot-toast';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';

import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import Modal from 'react-modal'
import ImageModal from './components/ImageModal/ImageModal.jsx';

const App = () => {
	const [query, setQuery] = useState('')
	const [results, setResults] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [page, setPage] = useState(1)
	const [modalIsOpen, setIsOpen] = useState(false);
	const [imageUrl, setImageUrl] = useState("");
	// useEffect for fetching data
	useEffect(() => {
		if (query) {

			const getData = async () => {
				try {
					setLoading(true)
					const response = await fetchData(query, page);
					toast.success(`Search results for "${query}"`)
					console.log(response)
					setLoading(false)
					setResults((prevResults) => [...prevResults, ...response.results])
				} catch (err) {
					toast.error(`There was an error occurred`)
					setLoading(false)
					setError(true)
				}

			}
			getData();
		}

	}, [query, page]);

	function openModal(url) {
		setImageUrl(url);
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
		setImageUrl("");
	}

	// Submit fc
	const onSubmit = (value, {resetForm}) => {
		if (value.query.trim() === '') {
			toast.error('Please enter a search query')
			return;
		}
		if (value.query !== query) {
			setResults([])
			setPage(1)
		}
		setQuery(value.query)
		resetForm()
	};

	const onClick = () => {
		setPage((prevPage) => prevPage + 1);
	}

	Modal.setAppElement("#root");
	// APP
	return (
		<>
			{loading && <Loader/>}

			<SearchBar onSubmit={onSubmit}/>
			{error && <ErrorMessage/>}
			{results.length > 0 && <ImageGallery results={results} openModal={openModal}/>}
			{results.length > 0 && <LoadMoreBtn onClick={onClick}/>}
			{modalIsOpen && (
				<ImageModal
					modalIsOpen={modalIsOpen}
					closeModal={closeModal}
					imageUrl={imageUrl}
				/>
			)}
		</>
	);
};

export default App;
