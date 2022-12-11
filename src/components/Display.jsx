import WithCounterData from "./withCounterData";

function Display(props) {
  return (
    <div className="displayArea">
      <div>
        <h2>Counter : </h2>
        <span>{props.counter}</span>
        <h1>INCROYABLE : {props.incroyable}</h1>
      </div>
      <div>
        <button onClick={props.increment}>[+]</button>
        <button onClick={props.decrement}>[-]</button>
      </div>
    </div>
  );
}
export default WithCounterData(Display);
