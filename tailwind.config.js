/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/*.html'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            fontFamily: {
                poppins: "'Poppins', sans-serif",
            },
            colors: {
                primary: '#7A9D54',
            },
        },
    },
    plugins: [],
};
