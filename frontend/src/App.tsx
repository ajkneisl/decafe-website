import React, { useEffect } from "react"
import "./styles/index.scss"
import Header from "./components/Header"
import {
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
} from "react-router"
import Menu from "./views/Menu"
import { createBrowserRouter } from "react-router-dom"
import { useAtom } from "jotai"
import { configurables, menuItems } from "./features/menu/Menu.atom"
import Cart from "./views/Cart"
import { getMenu } from "./features/menu/Menu.api"
import Home from "./views/Home"
import { loadStripe } from "@stripe/stripe-js"
import Footer from "./components/Footer"

const Base = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Base />} path="/">
            <Route index element={<Home />} />

            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
        </Route>
    )
)

function App() {
    const [menu, setMenu] = useAtom(menuItems)
    const [, setConfigurables] = useAtom(configurables)

    useEffect(() => {
        loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx").then(() =>
            getMenu().then(({ menu, configurables }) => {
                setMenu(menu)
                setConfigurables(configurables)
            })
        )
    }, [setConfigurables, setMenu])

    return (
        <>
            {menu.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <RouterProvider router={router} />
            )}{" "}
        </>
    )
}

export default App
