import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<nav className='navbar navbar-inverse'>
				<div className='container-fluid'>
					<div className='navbar-header'>
						<button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>
						</button>
						<Link className='navbar-brand' to='/'>
							EduMato
						</Link>
					</div>
					<div className='collapse navbar-collapse' id='myNavbar'>
						<ul className='nav navbar-nav'>
							<li>
								<Link to='/'>Home</Link>
							</li>
						</ul>
						{/* <ul className='nav navbar-nav navbar-right'>
							<li>
								<Link to='/login'>
									<span className='glyphicon glyphicon-user'></span> Sign Up
								</Link>
							</li>
							<li>
								<Link to='/logout'>
									<span className='glyphicon glyphicon-log-in'></span> Login
								</Link>
							</li>
						</ul> */}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
