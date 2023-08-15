/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/*.html'],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },
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
