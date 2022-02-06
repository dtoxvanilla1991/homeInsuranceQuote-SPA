// const initialState = {
//     userData: []
// };

const dataReducer = (state = null, action) => {
    switch(action.type) {
        case 'FETCH_USERDATA':
            return action.payload;
        default:
            return state;
    }
}
export default dataReducer;