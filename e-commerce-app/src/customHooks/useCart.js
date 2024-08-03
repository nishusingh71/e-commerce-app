import {
    useState
} from "react";

export const useCart = (cart, customer) => {
    const [cartState, setCartState] = useState({
        ...cart
    })

    const addItemToCart = (item, quantity) => {

        let currentCartItems = [...cartState.items];

        if (currentCartItems.length > 0) {
            let productExists = currentCartItems.find((itm) => itm.id === item.id)
            let productExistsIndex = currentCartItems.findIndex((itm) => itm.id === item.id)
            
            if (productExists) {
                if (quantity) {
                    currentCartItems.splice(productExistsIndex, 1, {
                        ...productExists,
                        purchaseQuantity: quantity
                    })
                } else {
                    currentCartItems.splice(productExistsIndex, 1, {
                        ...productExists,
                        purchaseQuantity: productExists.purchaseQuantity + 1
                    })
                }
            } else {
                if (quantity) {
                    currentCartItems.push({
                        ...item,
                        purchaseQuantity: quantity
                    });
                } else {
                    currentCartItems.push({
                        ...item,
                        purchaseQuantity: 1
                    });
                }
            }
        } else {
            if (quantity) {
                currentCartItems.push({
                    ...item,
                    purchaseQuantity: quantity
                });
            } else {
                currentCartItems.push({
                    ...item,
                    purchaseQuantity: 1
                });
            }
        }

        cart.customer = customer;
        cart.items = currentCartItems
        cart.subTotal = 0;
        cart.tax = 0;
        cart.grandTotal = 0;

        for (const item of cart.items) {
            cart.subTotal += +item.price * item.purchaseQuantity
        }

        cart.grandTotal = cart.subTotal + cart.tax

        return cart;

    }

    const updateItemToCart = () => {

    }

    const deleteItemToCart = () => {

    }

    

    return [cart, addItemToCart, updateItemToCart, deleteItemToCart]
}