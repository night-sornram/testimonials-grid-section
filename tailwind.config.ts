import type { Config } from 'tailwindcss'

const {colors : defaultColors } = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(263, 55%, 52%)",
      "200" : "hsl(217, 19%, 35%)",
      "300" : "hsl(219, 29%, 14%)",
      "400" : "hsl(0, 0%, 81%)",
      "500" : "hsl(210, 46%, 95%)",
    }
  }
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'quot' : "url('/images/bg-pattern-quotation.svg')"
      },
      colors : colors,
      backgroundPosition: {
        'right-top': 'right 15% top',

      }
    },
  },
  plugins: [],
}
export default config
