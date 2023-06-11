import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [clienSecret, setClientSecret] = useState('')
    const location = useLocation()
    const price = location.state.price;

    useEffect(() => {
        if (price > 0) {
            axios.post('http://localhost:5000/payment-intent', { price })
                .then(res => {
                    console.log(res.data.clienSecret)
                    setClientSecret(res.data.clienSecret)
                })
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log(error)
            setError(error.message)
        }
        else {
            setError('')
        }

        const { paymentIntent, error: confimError } = await stripe.confirmCardPayment(
            clienSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    },
                },
            },
        );

        if (confimError) {
            console.log(confimError)
        }

        console.log(paymentIntent)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-xs btn-primary my-3' type="submit" disabled={!stripe || !clienSecret}>
                    Pay
                </button>
            </form>
            {error && <p className='text-error'>{error}</p>}
        </>
    );
};

export default CheckoutForm;