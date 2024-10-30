/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'100': '#161a1d',
				'200' : '#4bce97',
				"300": '#1d2125',
				"400" : "#2AB37A"
  			},
			hover :{ 
				"100" : "#60e0aafb"
				
			},
			light : {
				"100" : "#C7D1DB"
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}