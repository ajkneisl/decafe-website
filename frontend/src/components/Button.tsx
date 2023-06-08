import React from "react"

type ButtonProps = {
    text: string,
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export const Button = (props: ButtonProps) => {
    return (
        <button
            {...props}
            type="button"
            className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ${props.className}`}
        >
            {props.text}
        </button>
    )
}
