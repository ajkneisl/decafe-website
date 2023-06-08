import {atom} from "jotai";
import { atomWithStorage } from 'jotai/utils'

/**
 * What the user currently has in their cart.
 */
export const cart = atomWithStorage<string[]>("cart", [])