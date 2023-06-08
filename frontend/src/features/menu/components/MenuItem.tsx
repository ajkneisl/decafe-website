import { MenuItemDetails } from "../models/MenuItemDetails"
import React, { useState } from "react"
import { useAtom } from "jotai"
import { cart } from "../../cart/Cart.atom"
import { Button } from "../../../components/Button"
import Modal from "../../../components/Modal"
import { enabledConfigurables } from "../Menu.atom"
import { Configurable } from "./Configurables"

const MenuItem: React.FC<{ details: MenuItemDetails }> = ({ details }) => {
    const [currentCart, setCurrentCart] = useAtom(cart)
    const [configure, setConfigure] = useState(false)
    const [configurables, setConfigurables] = useAtom(enabledConfigurables)

    // remove or add this item from the cart
    const toggleCart = () => {
        const itemInCart =
            currentCart.filter(
                (cartItem) => cartItem.menuItem.itemID === details.itemID
            ).length > 0

        if (itemInCart) {
            // remove from cart
            setCurrentCart((current) =>
                current.filter(
                    (cartItem) => cartItem.menuItem.itemID !== details.itemID
                )
            )
        } else {
            // if the item has configurable items, enable menu
            if (details?.configurables?.length > 0) {
                setConfigure(true)
            } else {
                finalizeCart()
            }
        }
    }

    const finalizeCart = () => {
        const finalConfigurables = configurables

        // remove disabled values
        Object.keys(finalConfigurables).forEach((key) => {
            if (finalConfigurables[key] === 0) delete finalConfigurables[key]
        })

        setCurrentCart((current) => [
            ...current,
            { menuItem: details, configurables: finalConfigurables },
        ])
        setConfigurables({})
        setConfigure(false)
    }

    return (
        <div className="bg-darkColor shadow-lg text-white w-full md:w-[256px] p-4 rounded-lg flex flex-col justify-between">
            <Modal
                visible={configure}
                setVisible={setConfigure}
                title={`Customize ${details.itemName}`}
                controls={
                    <>
                        <Button text={"Add to Cart"} onClick={finalizeCart} />
                        <Button
                            text={"Exit"}
                            onClick={() => setConfigure(false)}
                        />
                    </>
                }
            >
                <div className="flex flex-col">
                    {details?.configurables?.map((configurable) => (
                        <Configurable id={configurable} />
                    ))}
                </div>
            </Modal>

            <h2 className={"text-xl font-bold montserrat"}>
                {details.itemName}
            </h2>
            <p className="mb-4 open-sans">{details.description}</p>

            <img
                className="self-center mb-4"
                width="164px"
                src={details.imageURL}
                alt={`${details.itemName}`}
            />

            <div className="flex flex-row justify-between items-center gap-4">
                <h3 className="text-md monospace">
                    ${details.price.toFixed(2)}
                </h3>

                <Button
                    onClick={toggleCart}
                    className="transition-all"
                    text={
                        currentCart.filter(
                            (cartItem) =>
                                cartItem.menuItem.itemID === details.itemID
                        ).length > 0
                            ? "Remove from Cart"
                            : "Add to Cart"
                    }
                />
            </div>
        </div>
    )
}

export default MenuItem
