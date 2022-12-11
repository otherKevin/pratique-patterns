import WithCounterData from "../components/withCounterData";
import Display from "../components/Display";
import { Link } from "react-router-dom";

const DisplayWithCounter = WithCounterData(Display);
function WrappedComponents1() {
  return (
    <div className="wrappingComponents1Display">
      <Link to="/">MAIN PAGE</Link>
      <hr />
      <h2>Wrapped components practice n°1</h2>
      <DisplayWithCounter />
    </div>
  );
}
export default WrappedComponents1;
