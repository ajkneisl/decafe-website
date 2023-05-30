package com.decafe.plugins

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.autohead.*
import io.ktor.server.plugins.doublereceive.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureRouting() {
  install(AutoHeadResponse)
  install(DoubleReceive)
  install(StatusPages) {
    exception<Throwable> { call, cause ->
      call.respondText(text = "500: $cause", status = HttpStatusCode.InternalServerError)
    }
  }
  routing {
    get("/") { call.respondText("Hello World!") }
    post("/double-receive") {
      val first = call.receiveText()
      val theSame = call.receiveText()
      call.respondText(first + " " + theSame)
    }
  }
}
