import { MenuItemDetails } from "./models/MenuItemDetails"
import { atom } from "jotai"
import {ConfigurableDetails} from "./models/ConfigurableDetails";

/**
 * All items on the menu.
 */
export const menuItems = atom<MenuItemDetails[]>([])

/**
 * Valid configurable items.
 */
export const configurables = atom<ConfigurableDetails[]>([])

/**
 * Enabled configurables on an item.
 */
export const enabledConfigurables = atom<Record<string, number>>({})
