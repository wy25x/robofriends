import React, { useEffect } from 'react';
// @ts-ignore
import CardList from '../components/CardList.tsx';
// @ts-ignore
import SearchBox from '../components/SearchBox.tsx';
// @ts-ignore
import Scroll from '../components/Scroll.tsx';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { connect } from 'react-redux';  
import { setSearchField, requestRobots } from '../actions';

export interface IRobot {
	name: string,
 	email: string,
 	id: number
}

interface IAppProps {
	searchField: string,
	robots: Array<IRobot>,
	onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): void,
	onRequestRobots(): void
}

interface ISearchRobots {
	searchField: string
}

interface IRequestRobots {
	isPending: boolean,
	robots: Array<IRobot>,
	error: string
}

interface IAppState {
	searchRobots: ISearchRobots,
	requestRobots: IRequestRobots
}

const mapStateToProps = (state: IAppState) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onSearchChange: (event: any) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

function App(props: IAppProps)  {
	const { searchField, onSearchChange } = props;
	const filteredRobots = props.robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))

	useEffect(() => {
		props.onRequestRobots()
	}, [])

	return (
		<div className="tc">
			<h1 className="f1">Robofriends</h1>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredRobots} />
				</ErrorBoundry>
			</Scroll>
		</div>
	)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
