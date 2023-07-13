import { createStore } from "redux";
import { sidebarReducer } from "./reducer";

// A store which contain all the required states in
const store = createStore(sidebarReducer);

export default store;
