import {BASE_URL} from "../../api/Api";
import {MenuItemDetails} from "./models/MenuItemDetails";
import {ConfigurableDetails} from "./models/ConfigurableDetails";

/**
 * Get the items on the menu.
 */
export const getMenu = async (): Promise<{ menu: MenuItemDetails[], configurables: ConfigurableDetails[] }> => {
    const request = await fetch(`${BASE_URL}/menu`)

    return await request.json()
}