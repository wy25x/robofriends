import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			robots: [],
			searchField: ''
		}

		this.onSearchChange = this.onSearchChange.bind(this)
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => {
			this.setState({
				robots: users
			})
		})
	}

	onSearchChange(event) {
		this.setState({
			searchField: event.target.value
		})
	}

	render(){
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
		return (
			<div className="tc">
				<h1 className="f1">Robofriends</h1>
				<SearchBox searchField={searchField} searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		)
	}
}

export default App;