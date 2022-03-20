import Count from "./container/Count";
import "./index.css";
import store from "./redux/store";

export default function App() {
  return (
    <div className="App">
      <Count store={store} />
    </div>
  );
}
