import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { loadState, saveState } from './localStorage';

const store = createStore(rootReducer, loadState());

store.subscribe(() => saveState(store.getState()));

export default store;
