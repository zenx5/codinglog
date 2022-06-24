import React from 'react'

import { Container } from '@mui/material'
import {ThemeProvider} from '@mui/material'
import {theme} from './styles/theme'

import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'

export default function App() {



  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="false">
        <Header/>
        <Body/>
        <Footer/>
      </Container>
    </ThemeProvider>
  );
}


