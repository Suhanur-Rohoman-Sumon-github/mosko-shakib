import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const Chakout = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError,setCardError] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
      const {error ,paymentMethod} =await stripe.createPaymentMethod({
        type :'card',
        card
      })
      if(error){
        setCardError(error.message)
      }
      else{
        setCardError('')
        console.log('payment method ', paymentMethod)
      }
    }
    return (
       <>
        <form className="" onSubmit={handleSubmit}>
      <CardElement className="= mt-4 border border-white p-4"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: 'yellow',
              '::placeholder': {
                color: 'yellow',
              },
            },
            invalid: {
              color: 'red',
            },
          },
        }}
      />
      <button className="btn-primary mt-4" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    <p className="text-red-500">{cardError}</p>
       </>
    );
};

export default Chakout;