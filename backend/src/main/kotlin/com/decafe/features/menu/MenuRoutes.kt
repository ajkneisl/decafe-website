package com.decafe.features.menu

import com.decafe.features.menu.managers.Menu
import com.decafe.features.menu.models.Configurable
import com.decafe.features.menu.models.MenuItem
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.Serializable

fun Routing.menuRouting() {
    route("/menu") {
        get {
            @Serializable
            data class MenuResponse(
                val menu: List<MenuItem>,
                val configurables: List<Configurable>
            )

            call.respond(MenuResponse(Menu.getMenuItems(), Menu.getConfigurables()))
        }
    }
}
