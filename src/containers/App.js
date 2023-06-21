import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

function App()  {
	const [ robots, setRobots ] = useState([]);
	const [ searchField, setSearchField ] = useState("");

	const onSearchChange = (event) => {
		setSearchField(event.target.value);
	}

	const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => {
			setRobots(users)
		})
	}, [])

	return (
		<div className="tc">
			<h1 className="f1">Robofriends</h1>
			<SearchBox searchField={searchField} searchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredRobots} />
				</ErrorBoundry>
			</Scroll>
		</div>
	)
}

export default App;