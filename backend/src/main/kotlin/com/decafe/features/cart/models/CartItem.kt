package com.decafe.features.cart.models

import com.decafe.features.menu.models.MenuItem

/**
 * An item in a user's cart.
 *
 * @param configurables The configurables on the item. This could be whipped cream etc.
 * @param menuItem The item in the user's cart.
 */
data class CartItem(val configurables: Map<String, Double>, val menuItem: MenuItem)
