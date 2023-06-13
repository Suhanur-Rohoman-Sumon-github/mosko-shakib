import { loadStripe } from "@stripe/stripe-js";
import Chakout from "../chackot/Chakout";
import { Elements } from "@stripe/react-stripe-js";
import Title from "../../../componnet/title/Title";
import { useParams } from "react-router-dom";
import useCarts from "../../../hook/useCarts";
import { useEffect, useState } from "react";

const stripePromise = loadStripe('pk_test_51NECFwIaZAuMRrsmzpsH3ZsBJDGf9jIjr85gRITNMNCTeNPzRku5tLu913lEXTDFaYrIUjt2Z2DNmTBExYrPUupi00clJ9VjaZ');

const Payment = () => {
    const { id } = useParams();
    const [payment, setPayment] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false); 
    const [isRequestMade, setIsRequestMade] = useState(false);
    const [cards,setCards] = useState()
    
    const [carts] = useCarts();
    console.log(carts)

    useEffect(() => {
        if (!isRequestMade && carts) {
            const item = carts.find(cart => cart._id === id);
            setCards(item)
            console.log(item)
            if (item) {
                setPayment(item.Price); 
                setDataLoaded(true);
                setIsRequestMade(true)
            }
           
        }
    }, [carts,id,isRequestMade]);
    if (!dataLoaded) {
        return null; // Or render a loading state component
      }

    return (
        <div className="">
            <Title title="payment" subTitle="payment now" />
            <Elements stripe={stripePromise}>
                <Chakout payment={payment} cards={cards} />
            </Elements>
        </div>
    );
};

export default Payment;
