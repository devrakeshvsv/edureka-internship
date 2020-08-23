import React from 'react';
import Search from './Search';
import Footer from './Footer';
import QuickSearch from './QuickSearch';

// functional component
const Home = () => {
	return (
		<div>
			<Search />
			<QuickSearch />
			<hr />
			<Footer year='2020' />
		</div>
	);
};

export default Home;
