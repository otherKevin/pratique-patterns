/**
 * Créez un composant contenant un formulaire de paiement permettant de saisir un numéro de CB, une date
 * d’expiration et un cryptogramme. Chaque input devra pouvoir être contrôlé par le composant parent.
 */

function PaymentForm(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      cardNumber: e.target.cardNumber.value,
      expireDate: e.target.expireDate.value,
      cryptoNum: e.target.cryptoNum.value,
    });
  }
  return (
    <div className="paymentFormDisplay">
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card number : </label>
        <input type="number" name="cardNumber" />
        <br />
        <label htmlFor="expireDate">Expiration date : </label>
        <input type="date" name="expireDate" />
        <br />
        <label htmlFor="cryptoNum">Crypto : </label>
        <input type="number" name="cryptoNum" />
        <br />
        <input type="submit" value="validate" />
      </form>
    </div>
  );
}

export default PaymentForm;
