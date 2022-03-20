import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import { countReducer } from "./reducers/count_reducer";
import { personReducer } from "./reducers/person";

const allReducers = combineReducers({
    he: countReducer,
    rens: personReducer
})

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;

// 也可以这么写
// export default createStore(countReducer)
