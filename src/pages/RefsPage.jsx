import { Link } from "react-router-dom";

import { useEffect, useRef } from "react";

function RefsPage() {
  const inputElement = useRef(null);
  useEffect(() => {
    inputElement.current.focus();
  }, []);

  function handleClick() {
    inputElement.current.value = inputElement.current.value.toUpperCase();
  }

  return (
    <div className="refsPracticeDisplay">
      <Link to="/">MAIN PAGE</Link>
      <hr />
      <input ref={inputElement} type="text" />
      <button onClick={handleClick}>MAJ</button>
    </div>
  );
}
export default RefsPage;
