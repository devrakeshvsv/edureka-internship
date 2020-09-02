import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RESTAURANT_DETAILS = 'http://localhost:8900/restaurantdetails';

class RestaurantDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurant: '',
		};
	}

	backButton = (event) => {
		let mealID = parseInt(sessionStorage.getItem('mealID'));
		this.props.history.push(`/details/${mealID}`);
	};

	render() {
		var rest = this.state.restaurant;
		return (
			<div className='container'>
				<div className='panel panel-primary'>
					<div className='panel panel-heading'>
						<center>
							<h4>{rest.name}</h4>
						</center>
					</div>
					<div className='panel-body'>
						<div className='row'>
							<div className='col-md-6'>
								<img className='img-responsive' src={rest.thumb} />
							</div>
							<div className='col-md-6'>
								<h3 style={{ color: '#ff0000' }}>{rest.name}</h3>
								<h4>
									Address: <span style={{ color: '#00a0a0' }}>{rest.address}</span>
								</h4>
								<h4>
									Cost: <span style={{ color: '#00a0a0' }}>&#8377; {rest.cost}</span>
								</h4>
								<h4>
									Contact Number: <span style={{ color: '#00a0a0' }}>{rest.contact_number ? rest.contact_number : 'NA'}</span>
								</h4>
							</div>
						</div>
						<br />
						<div className='row'>
							<button onClick={this.backButton} to='#' className='btn btn-danger'>
								Back
							</button>
							&nbsp;
							<Link to='#' className='btn btn-success'>
								Place Order
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		let restID = parseInt(this.props.match.params.id);
		axios.get(`${RESTAURANT_DETAILS}/${restID}`).then((res) => {
			this.setState({ restaurant: res.data[0] });
		});
	}
}

export default RestaurantDetails;
