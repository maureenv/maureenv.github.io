import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { ThemeProvider } from 'emotion-theming'
import App from './App'

const theme = {
  textColor: '#3f4144',
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
