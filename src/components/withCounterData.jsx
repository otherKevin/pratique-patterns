import { useState } from "react";

function WithCounterData(WrappedComponent) {
  function NewComponent() {
    const test = "transmis";
    const [counter, setCounter] = useState(0);

    function increment() {
      setCounter(counter + 1);
    }
    function decrement() {
      setCounter(counter - 1);
    }

    return (
      <div className="wrapperComponent">
        <span>Wrapped component under : </span>
        <WrappedComponent
          incroyable={test}
          counter={counter}
          increment={increment}
          decrement={decrement}
        />
      </div>
    );
  }
  return NewComponent;
}
export default WithCounterData;
