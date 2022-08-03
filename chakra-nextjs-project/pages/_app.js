
import {ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react'
import '../styles/globals.css'
import Container from '../components/Container'
import Head from 'next/head'
import { CartProvider, useCart } from "react-use-cart";
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
    <CartProvider>
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
    </CartProvider>
  ) 
}

export default MyApp
