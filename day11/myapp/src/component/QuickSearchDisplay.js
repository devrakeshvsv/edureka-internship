import React from 'react';
import { Link } from 'react-router-dom';
import './QuickSearchDisplay.css';

const QuickSearchDisplay = (props) => {
	const listItem = (mealData) => {
		if (mealData) {
			return mealData.map((item) => {
				return (
					<Link to='/details'>
						<div className='tileContainer'>
							<div className='tileComponent1'>
								<img src='https://i.postimg.cc/76kStDSv/food-Wallpaper.png' />
							</div>
							<div className='tileComponent2'>
								<div className='componentHeading'>{item.name}</div>
								<div className='componentSubHeading'>Start your day with exclusive breakfast option</div>
							</div>
						</div>
					</Link>
				);
			});
		}
	};
	return (
		<div>
			<div className='quickSearchContainer'>
				<p className='quickSearchHeding'>Quick Searches</p>
				<p className='quickSearchSubHeding'>Discover restaurants by type of meal</p>
				{listItem(props.mealData)}
			</div>
		</div>
	);
};

export default QuickSearchDisplay;
