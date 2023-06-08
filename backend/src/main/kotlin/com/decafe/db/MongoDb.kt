package com.decafe.db

import org.litote.kmongo.coroutine.*
import org.litote.kmongo.reactivestreams.KMongo

val mongoClient by lazy {
    KMongo.createClient(
        "mongodb+srv://decafe:QJmscTqsc4LnGYQp@decafe.3h9wcrl.mongodb.net/?retryWrites=true&w=majority"
    ).coroutine
}

val mongoDatabase by lazy { mongoClient.getDatabase("decafe") }
