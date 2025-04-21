export function pxCutOff(px) {
  return `${(px / 1400) * 100}vw`
}

const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
    './templates/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxs: '375px',
      xs: '500px',
      sm: '600px',
      md: '768px',
      lg: '1050px',
      xl: '1280px',
    },
    colors: {
      black: '#040404',
      white: '#FBFBF6',
      blue: '#003B90',
      gray: '#777777',
      azure: '#DCE8E8',
      rose: '#FDEBE6',
      cocoa: '#D76D14',
      yellow: '#F5FDDB',
      zomp: '#06987D',
      chrysler: '#480BE8',
      klm: '#104EEF',
      lavender: '#D8E4FB',
    },
    transitionTimingFunction: {
      default: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    },
    rounded: {
      small: '5px',
      large: '10px',
    },
    fontFamily: {
      serif: ['Source Serif Pro', 'serif'],
      sans: ['Source Sans Pro', 'sans-serif'],
    },
    fontSize: {
      h1: [
        'clamp(42px, 22.9392px + 5.0829vw, 88px)',
        {
          lineHeight: 'clamp(40px, 23.4254px + 4.4199vw, 80px)',
          letterSpacing: '-1.75px',
          fontWeight: '400',
        },
      ],
      'h1-xl': [
        pxCutOff(88),
        {
          lineHeight: pxCutOff(80),
          letterSpacing: pxCutOff(-1.75),
          fontWeight: '400',
        },
      ],

      h2: [
        'clamp(35px, 29.6133px + 1.4365vw, 48px)',
        {
          lineHeight: 1.175,
          letterSpacing: '-0.9px',
          fontWeight: '400',
        },
      ],
      'h2-xl': [
        pxCutOff(48),
        {
          lineHeight: 1.175,
          letterSpacing: pxCutOff(-0.9),
          fontWeight: '400',
        },
      ],

      h3: [
        'clamp(30px, 27.5138px + 0.663vw, 36px)',
        {
          lineHeight: 'clamp(30px, 27.5138px + 0.663vw, 36px)',
          fontWeight: '400',
        },
      ],
      'h3-xl': [
        pxCutOff(36),
        {
          lineHeight: pxCutOff(36),
          fontWeight: '400',
        },
      ],

      h4: [
        'clamp(20px, 18.3425px + 0.442vw, 24px)',
        {
          lineHeight: 'clamp(22px, 20.3425px + 0.442vw, 26px)',
          fontWeight: '400',
        },
      ],
      'h4-xl': [
        pxCutOff(24),
        {
          lineHeight: pxCutOff(26),
          fontWeight: '400',
        },
      ],

      p: [
        '16px',
        {
          lineHeight: '19.2px',
          fontWeight: '400',
        },
      ],
      'p-xl': [
        pxCutOff(14),
        {
          lineHeight: pxCutOff(17.2),
          fontWeight: '400',
        },
      ],
    },
    spacing: {
      gutter: 'clamp(20px, 11.7127px + 2.2099vw, 40px)',
      'gutter-xl': pxCutOff(40),
      xxl: 'clamp(60px, 35.1381px + 6.6298vw, 120px)',
      'xxl-xl': pxCutOff(120),
      xl: 'clamp(40px, 19.2818px + 5.5249vw, 90px)',
      'xl-xl': pxCutOff(90),
      lg: 'clamp(30px, 17.5691px + 3.3149vw, 60px)',
      'lg-xl': pxCutOff(60),
      md: 'clamp(20px, 15.8564px + 1.105vw, 30px)',
      'md-xl': pxCutOff(30),
      sm: '20px',
      'sm-xl': pxCutOff(20),
      xs: '16px',
      'xs-xl': pxCutOff(16),
      xxs: '8px',
      'xxs-xl': pxCutOff(8),
      0: 0,
    },
    borderRadius: '1px',
  },
}

export default config
