import {MenuItemDetails} from "./models/MenuItemDetails";
import {atom} from "jotai";

/**
 * All items on the menu.
 */
export const menuItems = atom<MenuItemDetails[]>([])