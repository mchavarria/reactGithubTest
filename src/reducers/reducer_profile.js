import { 
    PROFILE_FETCHED, 
    PROFILE_EDITED 
} from '../actions/actions_profile'
  
const profile = (state = {}, action) => {
    // console.log(action)
    switch(action.type) {
        case PROFILE_FETCHED:
            return action.payload
        case PROFILE_EDITED:
            return action.payload
        default:
            return state
    }
}
  
export default profile
  