/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      OssemRegular: ['Ossem-Regular', 'sans-serif'],
      OssemRough: ['Ossem-Rough', 'sans-serif'],
      OssemRounded: ['Ossem-Rounded,', 'sans-serif'],
      OssemRust: ['Ossem-Rust', 'sans-serif'],
      Progress: ['Progress', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'main':"url('/images/main.png')",
        'homeHero1': "url('/images/homeHero1.png')",
        'homeWelcome': "url('/images/homeWelcome.png')",
        'homeMission': "url('/images/homeMission.png')",
        'homeVision': "url('/images/homeVision.png')",
        
        'homeHeroMobile' : "url('/images/homeHeroMobile.png')",
        'homeWelcomeMobile' : "url('/images/homeWelcomeMobile.png')",
        'homeVisionMobile': "url('/images/homeVisionMobile.png')",
        'heroMissionMobile': "url('/images/heroMissionMobile.png')",
      },
    },
  },
  plugins: [],
}
