import MenuItem from "../features/menu/components/MenuItem"
import { useAtom } from "jotai"
import { menuItems } from "../features/menu/Menu.atom"

const Menu = () => {
    const [items] = useAtom(menuItems)

    return (
        <div className="mx-6 flex md:flex-row flex-col flex-wrap gap-8 justify-center">
            {items.map((item) => (
                <MenuItem details={item} />
            ))}
        </div>
    )
}

export default Menu
