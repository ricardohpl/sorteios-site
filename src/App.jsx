import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

import { theme } from './components/styles/theme'

import NavRouter from "./components/NavRouter";

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <ThemeProvider theme={theme}>
        <NavRouter />
      </ThemeProvider>
    </Router>
  );
}

export default App;
