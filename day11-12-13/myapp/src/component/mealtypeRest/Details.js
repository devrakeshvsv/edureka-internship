import React, { Component } from 'react';
import axios from 'axios';
import DetailsDisplay from './DetailsDisplay';

const RESTAURANT_LIST_URL = 'http://localhost:8900/restaurantlist';

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cityID: parseInt(sessionStorage.getItem('cityID')) ? parseInt(sessionStorage.getItem('cityID')) : 1,
			restaurantlist: [],
		};
	}

	render() {
		return (
			<div>
				<DetailsDisplay restData={this.state.restaurantlist} />
			</div>
		);
	}

	componentDidMount() {
		let mealID = parseInt(this.props.match.params.id);
		sessionStorage.setItem('mealID', mealID);
		axios.get(`${RESTAURANT_LIST_URL}/${this.state.cityID}/${mealID}`).then((res) => {
			this.setState({ restaurantlist: res.data });
		});
	}
}

export default Details;
