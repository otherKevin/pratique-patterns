import { Link } from "react-router-dom";

function RootPage() {
  return (
    <section id="rootPageDisplay">
      <h1>React practice</h1>
      <Link to="/callback-props">Callback props practice</Link>
      <br />
      <Link to="/wrap-one">Wrapping components practice n°1</Link>
      <br />
      <Link to="/timer">Timer with ref</Link>
      <br />
      <Link to="/refs">useRef practice</Link>
      <br />
    </section>
  );
}
export default RootPage;
