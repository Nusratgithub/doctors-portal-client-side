
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import Loading from '../../Shared/Loading/Loading';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise)

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { treatment, price, appointmentDate, slot } = booking;
  if(navigation.state === "loading"){
      return <Loading></Loading>
  }
  return (
    <div>
      <h3 className="text-xl font-semibold py-3">Payment for {treatment}</h3>
      <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
      <div className='w-96 my-8 bg-white p-5'>
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
         </Elements>
  
      </div>
    </div>
  );
};

export default Payment;