import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {

    return (
        <div className="p-12">
            <h3 className="text-3xl text-center mb-5">Payment</h3>
            <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;