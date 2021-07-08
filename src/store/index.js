import Redusor from "../store/reducer";
import { createStore , applyMiddleware} from "redux";
import thunk from 'redux-thunk'

const store = createStore(Redusor,applyMiddleware(thunk))

export default store;
