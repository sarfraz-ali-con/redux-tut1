import { BUY_BOOK } from "../constants"; // Import the action type from your constants file

const initialState = {
  NumberofBooks: 20 // Make sure you use the correct key in your state
};

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BOOK:
            return {
                ...state,
                NumberofBooks: state.NumberofBooks - 1 // Update the number of books
            };
        default:
            return state;
    }
};

export default BookReducer;