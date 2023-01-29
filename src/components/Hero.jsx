import React from 'react';
import Button from './Button';

const Hero = () => (
	<div className="container flex flex-row justify-between mx-auto mt-5 mb-32 w-10/12">
		<div className="flex flex-col w-2/5 space-y-6">
			<h1 className="font-bold text-gray-100 text-7xl">
				Unlock Your Business Potential!
			</h1>
			<p className="text-gray-300">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
				nihil consequuntur dolore enim nostrum inventore.
			</p>
			<div className="flex py-4">
				<Button />
			</div>
		</div>
		<div className="flex justify-end">
			<img
				src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjBncm93dGh8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
				alt="Large Image"
				className="rounded-lg shadow-xl w-4/5"
			/>
		</div>
	</div>
);

export default Hero;
