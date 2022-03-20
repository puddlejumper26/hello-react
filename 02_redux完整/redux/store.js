import { createStore } from "redux";
import { countReducer } from "./count_reducer";

const store = createStore(countReducer);

export default store;

// 也可以这么写
// export default createStore(countReducer)
