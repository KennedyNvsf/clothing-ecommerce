import {UserActionTypes} from "./user.types"

//initial state of the reducer
const INITIAL_STATE = {

    currentUser: null,
}

//user reducer
const userReducer = (state  = INITIAL_STATE, action) => {

    switch (action.type) {

        case UserActionTypes.SET_CURRENT_USER:

        return {
            ...state,
            currentUser: action.payload
        }

        default:
            return state;

    }
}

export default userReducer;

//Notice that this user reducer is basically the same as a useState Hook, where:

// const INITIAL_STATE = {

//     currentUser: null,
// }


//represents the default state and:

// case 'SET_CURRENT_USER':

//     return {
//         ...state,
//         currentUser: action.payload
//     }

//Represents the state to set when the action performs

//all the above is the same as:

// const [currentUser, setCurrentUser] = useState(null);