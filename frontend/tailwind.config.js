/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "backgroundColor": "#F2E7D5",
                "elevatedColor": "#F2E7D5",
                "navigationColor": "#6D9886",
                "darkColor": "#393E46",
                "decaColor": "#621e09"
            }
        },
    },
    plugins: [],
}

