const initialState = {
    validate:''
}

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (action.type) {
        case "URL_STATUS":
            return{
                ...state,
                validate: action.payload
            }
            default:
                return state;
            }
        }
        
        export default rootReducer;