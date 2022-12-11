import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function TimerPage() {
  const iId = useRef(null);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("tic tac");
    }, 1000);
    iId.current = id;
  });
  return (
    <div className="timerPage">
      <Link to="/">MAIN PAGE</Link>
      <hr />
      <button
        onClick={() => {
          clearInterval(iId.current);
        }}
      >
        Arrêter le timer
      </button>
    </div>
  );
}
export default TimerPage;
