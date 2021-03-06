import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutBtn = ({price}) => {

    const priceForStripe = price * 100;
    const pubKey = 'pk_test_51KY4DIC9yVb69rCRROUSoX87WpsFujb6wocBYiVosT5gxvTu3E9SiuCT7MlZiyoNmwRlnGG4sBnkIDZEazvQUTfH00iyaSMMpT';

    const onToken = token => {
        
        console.log(token);
        alert("Payment Successful")
    
    }

    return (

        <StripeCheckout

         label="Pay Now"
         name="CRWN Clothing Ltd,"
         billingAddress
         shippingAddress
         imageUrl="https://svgshare.com/i/CUz.svg"
         description={`Your Total is $${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={pubKey}
        />
    )


}

export default StripeCheckoutBtn;