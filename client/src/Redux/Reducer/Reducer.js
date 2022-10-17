const initialState = {
    link:''
}

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (action.type) {
        case "LINK":
            return{
                link: action.payload
            }
            default:
                return state;
            }
        }
        
        export default rootReducer;