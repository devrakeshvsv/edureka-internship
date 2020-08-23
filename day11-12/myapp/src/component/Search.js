import React, { Component } from 'react';

const LOCATION_URL = 'http://localhost:8900/location';
const RESTAURANT_URL = 'http://localhost:8900/restauranthome?city=';

class Search extends Component {
	constructor() {
		super();
		this.state = {
			location: '',
			city: '',
			restaurant: '',
		};
	}

	handleCity = (event) => {
		this.setState({ city: event.target.value });
		var cityID = parseInt(event.target.value);
		fetch(`${RESTAURANT_URL}${cityID}`, { method: 'GET' })
			.then((res) => res.json())
			.then((data) => {
				this.setState({ restaurant: data });
			});
	};

	renderCity = (data) => {
		if (data) {
			return data.map((item) => {
				return <option value={item.city}>{item.name}</option>;
			});
		}
	};

	renderRestaurant = (data) => {
		if (data) {
			return data.map((item) => {
				return (
					<option>
						{item.name} | {item.locality}
					</option>
				);
			});
		}
	};

	render() {
		return (
			<header>
				<center>
					<select onChange={this.handleCity}>{this.renderCity(this.state.location)}</select>
					<input list='restaurant' name='rests' id='rests' />
					<datalist id='restaurant'>{this.renderRestaurant(this.state.restaurant)}</datalist>
				</center>
				<hr />
			</header>
		);
	}

	componentDidMount() {
		fetch(LOCATION_URL, { method: 'GET' })
			.then((res) => res.json())
			.then((data) => {
				this.setState({ location: data });
			});
	}
}

export default Search;
