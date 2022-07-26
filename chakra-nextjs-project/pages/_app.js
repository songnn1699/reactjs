
import {ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react'
import '../styles/globals.css'
import Container from '../components/Container'
import Head from 'next/head'
// const color={
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '2a69ac'

//   },
// }

// const theme= extendTheme({color})

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
        }}
      />
      <Head>
          <title>NextJS Chakra UI</title>
      </Head> 
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  ) 
}

export default MyApp
