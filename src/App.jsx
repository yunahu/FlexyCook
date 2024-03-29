import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/App.css';
import Router from 'src/Router/Router';
import Navbar from 'src/components/Navbar/Navbar';
import Footer from 'src/components/Footer/Footer';




const App = () => {
  return (
		<div>
			<Navbar />
			<Router />
			<Footer />
		</div>
  );
};

export default App;
