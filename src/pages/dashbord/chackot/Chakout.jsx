import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";
import useContexts from "../../../hook/useContexts";
import useAxiosSequire from "../../../hook/useAxiosSequire";
import useCarts from "../../../hook/useCarts";
import useInstractorsCartData from "../../../hook/useInstractorsCartData";

const Chakout = ({ payment, cards }) => {
  const { user } = useContexts()
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSequire()
  const [refetch] = useCarts()
  const [instractorClass] = useInstractorsCartData()
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [isPaymaentIntent, setIsPaymentIntent] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [transectionid, setTransectionid] = useState()
  // add verify jwt otken impiment
  useEffect(() => {
    if (!isPaymaentIntent) {
      axios.post('http://localhost:5000/creat-payment-intrigation', { payment })
        .then(res => {
          setClientSecret(res.data.clientSecret)
          setIsPaymentIntent(true)
        })
    }

  }, [payment, isPaymaentIntent]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || processing) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError('');
    }
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName
          },
        },
      }
    );
    if (confirmError) {
      setCardError(confirmError)
    }
    setProcessing(false)

    if (paymentIntent.status === 'succeeded') {
      const trasectionid = paymentIntent.id
      setTransectionid(trasectionid)

      const classId = instractorClass._id
        fetch(`http://localhost:5000//instractor-class/avilable/${classId}`, {
          method: 'PATCH'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            refetch()
          })
      

      const id = cards._id
      fetch(`http://localhost:5000/carts/pyment/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.lgo(data)
          refetch()
        })
      const { Price, email, image, name, _id } = cards
      const payment = {
        Price,
        email,
        image,
        name,
        trasectionid,
        id: _id,
        date: new Date().toLocaleDateString()
      }
      axiosSecure.post('/payments', payment)
        .then(res => {
          console.log(res)
        })
    }
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <CardElement
          className="mt-4 border border-white p-4"
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
        <button className="btn-primary mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {transectionid && <p className="text-green-500"> paymet sucsses with {transectionid}</p>}
    </>
  );
};

export default Chakout;
