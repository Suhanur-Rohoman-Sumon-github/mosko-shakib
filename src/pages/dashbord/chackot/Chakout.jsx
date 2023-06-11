import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const Chakout = () => {
    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
    }
    return (
        <form className="" onSubmit={handleSubmit}>
      <CardElement className="md:w-4/12 mx-auto mt-4 border border-white p-4"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: 'blue',
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
      <div className="w-4/12 mx-auto mt-4">
      <button className="btn-primary" type="submit" disabled={!stripe}>
        Pay
      </button>
      </div>
    </form>
    );
};

export default Chakout;