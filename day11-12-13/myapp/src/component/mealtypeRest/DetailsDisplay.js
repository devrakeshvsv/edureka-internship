import React from 'react';
import { Link } from 'react-router-dom';

const DetailsDisplay = (props) => {
	const renderTable = ({ restData }) => {
		if (restData) {
			return restData.map((item) => {
				return (
					<tr>
						<td>
							<Link to={`/rest/${item._id}`}>{item.name}</Link>
						</td>
						<td>{item.city_name}</td>
						<td>{item.locality}</td>
						<td>{item.contact_number}</td>
						<td>{item.cost}</td>
					</tr>
				);
			});
		}
	};

	return (
		<div>
			<center>
				<h3>Restaurant List</h3>
				<table className='table'>
					<tr>
						<th>Name</th>
						<th>City</th>
						<th>Locality</th>
						<th>Contact</th>
						<th>Cost</th>
					</tr>
					{renderTable(props)}
				</table>
			</center>
		</div>
	);
};

export default DetailsDisplay;
