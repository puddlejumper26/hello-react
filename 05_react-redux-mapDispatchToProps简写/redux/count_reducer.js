import { INCREMENT, DECREMENT } from "./constant"

const initState = 0;
export function countReducer(preState, action) {
    if (preState === undefined) {
        preState = 0;
    } //考虑初始化
    const { type, data } = action;
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
};
