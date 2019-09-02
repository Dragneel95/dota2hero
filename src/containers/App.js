import React, {Component} from 'react';
import CardList from '../components/CardList';
import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox';
/*import Scroll from '../components/Scroll';*/
import './App.css';






class App extends Component 
{
	constructor()
	{
		super()
		this.state = 
		{
			/*robots: [],*/
			robots: robots,
			searchfield:''
		}
	}


/*componentDidMount()	 {
	fetch('https://api.opendota.com/api/heroStats')
	.then(response => response.json())
	.then(heroStats => {this.setState({robots: heroStats})});
}*/



	onSearchChange = (event) => 
	{
		this.setState({searchfield: event.target.value})
	}

	render()
	{

		const filteredRobots = this.state.robots.filter(robots => 
		{
			return robots.localized_name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

		return (

		<div className='tc'>
			<h1 className='f1'>Dota Heroes</h1>

			<SearchBox searchChange={this.onSearchChange} />
			{/*<Scroll>*/}
				<CardList robots= {filteredRobots}/>
			{/*</Scroll>*/}
		</div>
		);

	}
}

export default App;