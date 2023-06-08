import {BASE_URL} from "../../api/Api";
import {MenuItemDetails} from "./models/MenuItemDetails";

/**
 * Get the items on the menu.
 */
export const getMenu = async (): Promise<MenuItemDetails[]> => {
    const request = await fetch(`${BASE_URL}/menu`)

    return await request.json()
}