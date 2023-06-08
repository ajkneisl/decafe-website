package com.decafe.features.menu

import com.decafe.features.menu.managers.Menu
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Routing.menuRouting() {
    route("/menu") {
        get {
            call.respond(Menu.getMenuItems())
        }
    }
}