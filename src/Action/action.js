export const addtobasket = ({id_,img_,price_,rating_,product_,time_}) => {
    return {
        type: "ADD_TO_BASKET",
        Product: {
            id: id_,
            img: img_,
            price: price_,
            rating: rating_,
            product: product_,
            time:time_
        }
    }
}
export const removefrombasket = (id) => {
    return {
        type: "REMOVE_FROM_BASKET",
        id: id
    }
}