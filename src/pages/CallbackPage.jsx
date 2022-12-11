import PaymentForm from "../components/PaymentForm";
import { useState } from "react";
import { Link } from "react-router-dom";

function CallbackPage() {
  const [card, setCard] = useState({
    cardNumber: 0,
    expireDate: "",
    cryptoNum: 0,
  });
  return (
    <section id="paymentFormArea">
      <Link to="/">MAIN PAGE</Link>
      <hr />
      <h2>Callback props practice</h2>
      <PaymentForm onSubmit={setCard} />
      <hr />
      <div className="valueDisplay">
        <span>Card number : {card.cardNumber}</span>
        <br />
        <span>Card expiration date : {card.expireDate}</span>
        <br />
        <span>Card crypto : {card.cryptoNum}</span>
        <br />
      </div>
    </section>
  );
}
export default CallbackPage;
