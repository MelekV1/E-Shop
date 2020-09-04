export const initialState={
    cart:[],
};
export const GetTotalPrice = 
(cart)=>{
    return cart.reduce( (initv,acc) => initv + acc.price , 0 )
}
function reducer(state , action){
    console.log(action)
    switch(action.type){
        case 'ADD_TO_CART':
            //Logic for adding item to basket
            return{
                ...state,
                cart:[...state.cart,action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket
            let newCart =[...state.cart]
            const index=state.cart.findIndex((cartitem)=>cartitem.id===action.id)
            if(index >=0){
                newCart.splice(index,1);
            }else{
                console.warn("erreur")
            }
            return{...state,
                cart:newCart
            }
        default :
            return state;
    }
}
export default reducer;