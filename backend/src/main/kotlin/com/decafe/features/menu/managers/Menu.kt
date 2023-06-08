package com.decafe.features.menu.managers

import com.decafe.db.mongoDatabase
import com.decafe.features.menu.models.Configurable
import com.decafe.features.menu.models.MenuItem

/** Handle the menu and [MenuItem]s. */
object Menu {
    /** Get all current [MenuItem]s. */
    suspend fun getMenuItems(): List<MenuItem> {
        return mongoDatabase.getCollection<MenuItem>("menu").find().toList()
    }

    /** Get all current [Configurable]s. */
    suspend fun getConfigurables(): List<Configurable> {
        return mongoDatabase.getCollection<Configurable>("configurables").find().toList()
    }
}
