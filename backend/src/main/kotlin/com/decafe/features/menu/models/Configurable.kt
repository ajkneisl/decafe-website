package com.decafe.features.menu.models

import kotlinx.serialization.Serializable

/** A configurable property on a [MenuItem]. */
@Serializable
data class Configurable(val name: String, val id: String, val price: Double, val type: String)
