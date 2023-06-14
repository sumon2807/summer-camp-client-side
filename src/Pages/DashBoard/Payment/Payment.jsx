import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useAddClass from '../../../hooks/useAddClass';

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Geteway_PK);
const Payment = () => {
const [booking]=useAddClass();
const total=booking.reduce((sum, item)=>sum + item.price, 0);
const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <Helmet>
                <title>Yoku | Payment</title>
            </Helmet>
            <SectionTitle heading={'Payment'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm booking={booking} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;