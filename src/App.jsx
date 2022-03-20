import Count from "./container/Count";
import Person from "./container/Person";
import store from "./redux/store";

export default function App() {
  return (
    <div className="App">
      <Count store={store} />
      <hr />
      <Person store={store} />
    </div>
  );
}
