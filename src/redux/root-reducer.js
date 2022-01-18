import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// import local storage. This tells Redux "I want to use local storage as my default storage".
import storage from "redux-persist/lib/storage";

// this would need to be uncommented if session storage is needed.
// import sessionStorage from "redux-persist/es/storage/session";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
	key: 'root',
	storage,
	// whitelist is an array containing names of reducers we want to store.
	// user is being handled by firebase authentication so there's no reason for us to persist it.
	// this tells redux-persist the only reducer that we want to persist is the cart.
	whitelist: ['cart']
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);