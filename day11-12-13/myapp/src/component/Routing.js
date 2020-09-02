import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Details from './mealtypeRest/Details';
import Header from './Header';
import RestaurantDetails from './RestDetails/RestaurantDetails';

const Routing = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path='/' component={Home}></Route>
					<Route path='/details/:id' component={Details}></Route>
					<Route path='/rest/:id' component={RestaurantDetails}></Route>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default Routing;
