import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

class App extends React.Component {
	constructor(){
		super();

		this.state = {
			currentUser: null
		}
	}

	componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if(userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
					console.log(this.state);
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
		  <>
			  {/*
				  NOTE: Header component is strategically placed outside of routes so that it would show
				  up on every page.
			  */}
			   <Header currentUser={this.state.currentUser} />
			  {/*
				  Switch routes to the first available route it finds when a user goes to some URL.
				  See Routing In Out Project lecture of Section 5: Master Project: Reach Router and
				  Routing.
			   */}
			  <Switch>
				  <Route exact path='/' component={HomePage} />
				  {/* <Route path ='/shop/hats' component={HatsPage} /> */}
				  <Route path='/shop' component={ShopPage} />
				  <Route path='/signin' component={SignInAndSignUpPage} />
			  </Switch>
		  </>
		);
	}
}

export default App;
