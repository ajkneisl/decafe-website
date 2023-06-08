import { atomWithStorage } from "jotai/utils"
import { CartItemDetails } from "./models/CartItemDetails"

/**
 * What the user currently has in their cart.
 */
export const cart = atomWithStorage<CartItemDetails[]>("cart", [])
