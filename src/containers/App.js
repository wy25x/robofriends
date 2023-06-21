import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { connect } from 'react-redux';  
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

function App(props)  {
	const { searchField, onSearchChange } = props;
	const filteredRobots = props.robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))

	useEffect(() => {
		props.onRequestRobots()
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
