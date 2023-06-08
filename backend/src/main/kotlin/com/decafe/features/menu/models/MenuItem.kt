package com.decafe.features.menu.models

import kotlinx.serialization.Serializable

/** An item on the menu. */
@Serializable
data class MenuItem(
    val itemName: String,
    val itemID: String,
    val description: String,
    val price: Double,
    val imageURL: String
)
