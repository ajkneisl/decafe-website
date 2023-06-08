import {MenuItemDetails} from "../../menu/models/MenuItemDetails";

export type CartItemDetails = {
    configurables: Record<string, number>,
    menuItem: MenuItemDetails
}