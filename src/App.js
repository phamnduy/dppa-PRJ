import './App.css';
import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/index'
import styled from 'styled-components';

function App() {
	return (
		<Router>
				<Switch>
					<Route path="/" exact>
						<Home ></Home>
					</Route>
				</Switch>
		</Router>
	);
}

export default App;
