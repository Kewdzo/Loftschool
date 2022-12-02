import { logIn, logOut } from "./actions";


const local = JSON.parse(localStorage.getItem("isLoggedIn"));
console.log("LOCAL: " + local)
const initialState = {
  isLoggedIn: local
  //localStorage.getItem('isLoggedIn')
};


const reduxer = (state = initialState, action) => {  
  switch (action.type) {
    case logIn.toString(): {
      console.log("LOGIN");
      localStorage.setItem('isLoggedIn', JSON.stringify(true)) 
      return {isLoggedIn: true}
    }
    case logOut.toString(): {
      localStorage.setItem('isLoggedIn', JSON.stringify(false)) 
      return {isLoggedIn: false}
    }
    default:
      return state;
  }
}
 
export default reduxer;
