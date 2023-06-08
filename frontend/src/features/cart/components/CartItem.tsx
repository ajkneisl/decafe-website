import { FaPen, FaTrash } from "react-icons/fa"
import { useAtom } from "jotai"
import { cart } from "../Cart.atom"
import { CartItemDetails } from "../models/CartItemDetails"
import { configurables } from "../../menu/Menu.atom"
import { useEffect, useState } from "react"

/**
 * A compact display of a MenuItem with cart controls.
 */
const CartItem: React.FC<{ details: CartItemDetails }> = ({
    details: { menuItem: details, configurables: itemConfigurables },
}) => {
    const [, setCart] = useAtom(cart)
    const [validConfigurables] = useAtom(configurables)
    const [finalPrice, setFinalPrice] = useState(details.price)
    useEffect(() => {
        let configPrice = 0

        Object.keys(itemConfigurables)
            .map(
                (key) =>
                    validConfigurables.filter((valid) => valid.id === key)[0]
            )
            .forEach((item) => (configPrice += item.price))

        setFinalPrice(details.price + configPrice)
    }, [details.price, itemConfigurables, validConfigurables])

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-lg">{details.itemName}</h2>

                <div className="flex flex-row w-1/2 items-center justify-evenly">
                    <p className="text-lg monospace">
                        ${finalPrice.toFixed(2)}
                    </p>

                    <button
                        onClick={() =>
                            setCart((cart) =>
                                cart.filter(
                                    (item) =>
                                        item.menuItem.itemID !== details.itemID
                                )
                            )
                        }
                    >
                        <FaTrash />
                    </button>

                    <FaPen />
                </div>
            </div>

            {Object.keys(itemConfigurables).length > 0 && (
                <div className="flex flex-col ml-4">
                    {Object.keys(itemConfigurables)
                        .map(
                            (key) =>
                                validConfigurables.filter(
                                    (valid) => valid.id === key
                                )[0]
                        )
                        .map((item) => (
                            <div className="flex flex-row items-center gap-6">
                                <p>{item.name}</p>{" "}
                                <p className="monospace">
                                    + ${item.price.toFixed(2)}
                                </p>
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}

export default CartItem
