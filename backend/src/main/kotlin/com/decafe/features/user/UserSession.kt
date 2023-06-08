package com.decafe.features.user

import com.decafe.features.cart.models.CartItem

/** A user's session info. Mostly their [cart]. */
data class UserSession(val cart: MutableList<CartItem>)
