import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    // Stripe wants to see prices in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HQpzBIA8XdrBwzYb3Jyjw7xoRdAgT8amIjDE6OjDgeOoYpuwtKsm9wJIz0qZQPECl4wsQE5xapeVIld6vw7HCnT00WTeZBufC';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='HSH Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;