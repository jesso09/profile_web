import type { Config } from 'tailwindcss'
// import { nextui } from '@nextui-org/theme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        desktop: '1200px',
        desktopNavbar: '1300px',
        monitor: '1600px',
      },
      colors: {
        bluePrimary: '#333C4D',
        whitePrimary: '#FFFFFF',
        greenPrimary: '#4CB050',
        yellowPrimary: '#F7AD19',
      },
      padding: {
        main: '80px',
      },
      spacing: {
        'screen-minus-navbar': 'calc(100vh - 7rem)',
      },
    },
  },
//   plugins: [nextui()],
}

export default config

