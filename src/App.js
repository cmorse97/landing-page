import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';

const App = () => (
	<div className="bg-gradient-to-r from-sky-600 to-indigo-800 w-full h-screen">
		<div class="container mx-auto w-11/12">
			<Header />
			<Hero />
			<Info />
		</div>
	</div>
);

export default App;
