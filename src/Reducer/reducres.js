const initialstate = {
    bucket:[]
}

const doaddtocart = (state = initialstate, action) => {
    if (action.type == "ADD_TO_BASKET") {
        return {
            ...state,
            bucket:[...state.bucket,action.Product]
        }
    }
    else if (action.type == "REMOVE_FROM_BASKET") {
        const getindex = [...state.bucket].findIndex(({ id }) => id == action.id)
        console.log(getindex)
        return {
            ...state,
            bucket: [...state.bucket].filter(({id},index)=>index!=getindex)
            }
    }
    else {
        return state;
    }
}




export default doaddtocart;