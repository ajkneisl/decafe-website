import React from "react"
import { useAtom } from "jotai"
import { configurables, enabledConfigurables } from "../Menu.atom"

export const Configurable: React.FC<{ id: string }> = ({ id }) => {
    const [validConfigurables] = useAtom(configurables)

    const { name, price, type } = validConfigurables.filter(
        (item) => item.id === id
    )[0]

    const [enabled, setEnabled] = useAtom(enabledConfigurables)

    const onChange = () => {
        if (enabled[id] === 1) {
            setEnabled((prev) => ({ ...prev, [id]: 0 }))
        } else {
            setEnabled((prev) => ({
                ...prev,
                [id]: 1,
            }))
        }
    }

    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-4">
                <p>{name}</p>
                <p className="monospace">${price.toFixed(2)}</p>
            </div>

            {type === "checkbox" && (
                <input
                    id="checked-checkbox"
                    type="checkbox"
                    checked={enabled[id] === 1}
                    onChange={onChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
            )}
        </div>
    )
}
