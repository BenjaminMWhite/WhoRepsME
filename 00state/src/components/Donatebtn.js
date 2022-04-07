import React from "react";
// import the style element 
const Stripe = require('stripe');

// stripe api key for testing 
const stripePromise = Stripe(
    pk_test_51KlwL0LxwRlgtwaWLHSgTG1tefWqayobSdSOcqogkDl5HTPSr6XhobyvG42ipNlCkYVQRhV6ketbai52EWue4W8P008PrsMFns);

// donate function button function 
    const DonationButton = ({ itemID, amnt }) => {

        const handleClick = async (event) => {

          const stripe = await stripePromise;
          stripe.redirectToCheckout({
              
              lineItems: [{ price: itemID, quantity: 1 }],
              mode: "payment",
            // successUrl & cancelUrl 
              successUrl: window.location.protocol + "//deployed web /",
              cancelUrl: window.location.protocol + "//deployed web/",

              submitType: "donate",
            })

            .then(function (result) {
              if (result.error) {
                console.log(err);
              }
            });
        };

// btn view with onclick 
return (
    <button className="donbtn" onClick={handleClick}>
      Donate {amnt}$
    </button>
  )
 }

export default function App() {
  return (
    <>
      <div className="justify-center ">
        <DonationButton
          amnt={"$1"}
          itemID="prod_LSv4rXYFjogaQH "
        ></DonationButton>
      </div>
    </>
  );  
  };
