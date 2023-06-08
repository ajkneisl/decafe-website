import {useAtom} from "jotai"
import {cart} from "../features/cart/Cart.atom"
import CartItem from "../features/cart/components/CartItem"
import {menuItems} from "../features/menu/Menu.atom"
import React, {useEffect, useState, useContext} from "react";
import {PaymentRequestButtonElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import {Button} from "../components/Button";

const Cart = () => {
    const [currentCart] = useAtom(cart)
    const [menu] = useAtom(menuItems)

    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        let total = 0
        currentCart
            .map(
                (cartItem) =>
                    menu.filter(
                        (menuItem) => menuItem.itemID === cartItem
                    )[0]
            )
            .map((cartItem) => total += cartItem.price)

        setCartTotal(total)
    }, [currentCart, menu, setCartTotal])

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl mb-4">Cart</h1>
            <div className="max-w-lg">
                <h2 className="text-xl font-bold text-center mb-4">You have {currentCart.length} items in your
                    cart.</h2>
                <div className="my-16">
                    {currentCart.length !== 0 ? currentCart
                        .map(
                            (cartItem) =>
                                menu.filter(
                                    (menuItem) => menuItem.itemID === cartItem
                                )[0]
                        )
                        .map((cartItem) => (
                            <CartItem details={cartItem}/>
                        )) : <p className="text-center">You have nothing in your cart.</p>}
                </div>

                <div className="mt-4 flex flex-row justify-between items-center">
                    <h2 className="text-xl font-bold">Total: ${cartTotal}</h2>
                    <Button text={"Checkout"}/>
                </div>
            </div>
        </div>
    )
}

export default Cart
