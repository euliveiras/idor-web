/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#1F369A',
            link: '#1F369A',
            linkHover: '#0F448A',
            linkActive: '#0C356A',
            linkVisited: '#711DB0',
         },
      },
   },
   plugins: [],
}
