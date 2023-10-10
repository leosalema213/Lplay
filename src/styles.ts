import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#EEEEEE',
  black: '#111',
  grey: '#333',
  lightGrey: '#A3A3A3',
  green: '#10AC84'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
  body {
    padding-top: 40px;
    background-color: ${colors.black};
    color: ${colors.white};
  }

  .container{
    max-width: 1024px;
    witdh: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop} ) {
      max-width: 80%;
    }
  }
`
