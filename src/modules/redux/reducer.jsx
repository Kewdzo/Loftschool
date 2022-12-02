import { logIn, logOut } from "./actions";

const initialState = {
  isLoggedIn: false
};


const reduxer = (state = initialState, action) => {  
  switch (action.type) {
    case logIn.toString(): {
      console.log("LOGIN");
      return {isLoggedIn: true}
    }
    case logOut.toString(): {
      return {isLoggedIn: false}
    }
    default:
      return state;
  }
}
 
export default reduxer;
