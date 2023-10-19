import { createStore } from 'redux';
import BookReducer from '../reducers/reducer'; // Remove curly braces

const store = createStore(BookReducer);
export default store;
