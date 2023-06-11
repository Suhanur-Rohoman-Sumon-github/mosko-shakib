import { loadStripe } from "@stripe/stripe-js";
import Chakout from "../chackot/Chakout";
import { Elements } from "@stripe/react-stripe-js";
import Title from "../../../componnet/title/Title";

const stripePromise = loadStripe('pk_test_51NECFwIaZAuMRrsmzpsH3ZsBJDGf9jIjr85gRITNMNCTeNPzRku5tLu913lEXTDFaYrIUjt2Z2DNmTBExYrPUupi00clJ9VjaZ');
const Payment = () => {
    return (
        <div className="">
            <Title title='payment'subTitle='payment now'></Title>
            <Elements stripe={stripePromise}>
            <Chakout ></Chakout>
            </Elements>
        </div>
    );
};

export default Payment;