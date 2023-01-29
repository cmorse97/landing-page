import React from 'react';
import Button from './Button';

const Header = () => (
	<div className="container flex mb-32 pt-10 justify-center">
		<header className="flex flex-row w-11/12 items-center justify-between">
			<div className="font-semibold text-white text-2xl">Brand</div>
			<div className="flex items-center space-x-4">
				<ul className="flex text-gray-300 space-x-4">
					<li className="hover:text-gray-400 hover:underline">Features</li>
					<li className="hover:text-gray-400 hover:underline">Pricing</li>
					<li className="hover:text-gray-400 hover:underline">About Us</li>
					<li className="hover:text-gray-400 hover:underline">Careers</li>
				</ul>
				<Button />
			</div>
		</header>
	</div>
);

export default Header;
