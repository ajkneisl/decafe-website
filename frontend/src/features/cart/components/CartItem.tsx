import {MenuItemDetails} from "../../menu/models/MenuItemDetails";
import {FaPen, FaTrash} from "react-icons/fa";
import {useAtom} from "jotai";
import {cart} from "../Cart.atom";

/**
 * A compact display of a MenuItem with cart controls.
 */
const CartItem: React.FC<{ details: MenuItemDetails }> = ({ details }) => {
    const [, setCart] = useAtom(cart)

    return <div className="flex flex-row w-full justify-between items-center">
        <h2 className="text-lg">
            {details.itemName}
        </h2>

        <div className="flex flex-row w-1/2 items-center justify-evenly">
            <p className="text-lg">${details.price}</p>

            <button onClick={() => setCart(cart => cart.filter(item => item !== details.itemID))}><FaTrash/></button>

            <FaPen/>
        </div>
    </div>
}

export default CartItem