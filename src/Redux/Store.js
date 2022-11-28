import { createStore } from "redux";
import counterReducer from "./counter/counterreducer";

const store = createStore(counterReducer);
export default store;
