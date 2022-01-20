import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51KJdxQIO9ZC7iwdrYFmmSG4IE7Ekqe7W8bwjRRvtzc9ucyJn7EVN8RUiCRmr5gHRkwDM1ubItSVEmEQJzG5yONmS00XuyKq2V4';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return(
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image={Logo}
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
