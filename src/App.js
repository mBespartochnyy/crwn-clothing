import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';

function App() {
  return (
    <>
		{/*
			NOTE: Header component is strategically placed outside of routes so that it would show
			up on every page.
		*/}
		 <Header />
		{/*
			Switch routes to the first available route it finds when a user goes to some URL.
			See Routing In Out Project lecture of Section 5: Master Project: Reach Router and
			Routing.
		 */}
		<Switch>
			<Route exact path='/' component={HomePage} />
			{/* <Route path ='/shop/hats' component={HatsPage} /> */}
			<Route path ='/shop' component={ShopPage} />
		</Switch>
    </>
  );
}

export default App;
