import { MenuItemDetails } from "../models/MenuItemDetails"
import React, { useState } from "react"
import { useAtom } from "jotai"
import { cart } from "../../cart/Cart.atom"
import { Button } from "../../../components/Button"
import Modal from "../../../components/Modal"

const MenuItem: React.FC<{ details: MenuItemDetails }> = ({ details }) => {
    const [currentCart, setCurrentCart] = useAtom(cart)
    const [configure, setConfigure] = useState(false)

    // remove or add this item from the cart
    const toggleCart = () => {
        if (currentCart.includes(details.itemID)) {
            setCurrentCart((current) =>
                current.filter((item) => item != details.itemID)
            )
        } else {
            setConfigure(true)
        }
    }

    const finalizeCart = () => {
        setCurrentCart((current) => [...current, details.itemID])
        setConfigure(false)
    }

    return (
        <div className="bg-darkColor shadow-lg text-white w-full md:w-[256px] p-4 rounded-lg flex flex-col justify-between">
            <Modal
                visible={configure}
                setVisible={setConfigure}
                title={`Configure ${details.itemName}`}
                controls={
                    <>
                        <Button text={"Add to Cart"} onClick={finalizeCart} />
                        <Button text={"Exit"} onClick={() => setConfigure(false)} />
                    </>
                }
            >
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-4">
                        <p>Whipped Cream</p>
                        <p className="monospace">$0.50</p>
                    </div>

                    <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                </div>
            </Modal>

            <h2 className={"text-xl font-bold montserrat"}>
                {details.itemName}
            </h2>
            <p className="mb-4 open-sans">{details.description}</p>

            <img
                className="self-center mb-4"
                width="200px"
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
                        currentCart.includes(details.itemID)
                            ? "Remove from Cart"
                            : "Add to Cart"
                    }
                />
            </div>
        </div>
    )
}

export default MenuItem
