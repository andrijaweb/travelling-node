import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51QdXcD2fWwjgaBiF8P831AXWbMtdHja56wgtLFbNP3kkHMaIjIgfDwR6NHLCYR1zMDGS76ioXiMqezglOGz9Yth100mpwXMW20'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
