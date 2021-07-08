const data = {
    name:undefined
}

const Redusor = (state = data, action) => {
    console.log(action.name)
    switch (action.type) {
            case 'data':
            return {
                ...state,
                name: action.name
            }
        default: return state
    }
    return state
}
export default Redusor;