import { createStore } from "redux";

const initialState = 0;

function appReducer(prevState = initialState, action) {
   switch (action.type) {
      case "INCREMENT":
         return prevState + 1;
         break;

      case "DECREMENT":
         return prevState - 1;
         break;

      default:
         break;
   }
   return prevState;
}

const store = createStore(appReducer);

export default store;
