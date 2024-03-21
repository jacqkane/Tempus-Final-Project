export default function reducer(state, action) {
    // console.log(action)

    switch (action.type) {
        case 'currentDate/set':
            return {
                ...state,
                currentDate: action.payload
            }

        case 'user/set':
            return {
                ...state,
                user: action.payload
            }

        case 'role/set':
            return {
                ...state,
                role: action.payload
            }

           
    }

    return state;

}