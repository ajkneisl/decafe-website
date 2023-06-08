import { FaShoppingCart } from "react-icons/fa"
import { useAtom } from "jotai"
import { cart } from "../features/cart/Cart.atom"
import { useNavigate } from "react-router"

/**
 * DECAfe's header and navigation.
 */
const Header = () => {
    const [currentCart] = useAtom(cart)
    const nav = useNavigate()

    return (
        <header className="px-16 py-8 flex flex-row justify-center items-center">
            <button
                onClick={() => nav("/")}
                className="flex flex-row items-center gap-2 w-1/3"
            >
                <img src="/logo.png" width={32} alt="DECAfe Logo" />
                <h1 className="text-2xl gotham-bold text-decaColor">DECAFE</h1>
            </button>

            <nav className="md:flex flex-row items-center justify-center hidden gap-8 w-1/3">
                <button onClick={() => nav("/about")}>About</button>
                <button onClick={() => nav("/menu")}>Menu</button>
            </nav>

            <div className="flex flex-row-reverse gap-8 w-1/3">
                <button
                    onClick={() => nav("/cart")}
                    type="button"
                    className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg"
                >
                    <FaShoppingCart />
                    <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                        {currentCart.length}
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header
