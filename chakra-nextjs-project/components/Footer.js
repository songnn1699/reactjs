import { 
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    Image,
    VisuallyHidden,
    IconButton,
    Icon,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';



const Footer = () => {
    return ( 
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Image
            h= {8}
            w ={8} 
            src='https://cdn-icons-png.flaticon.com/512/408/408421.png'>
        </Image>
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
        <Text>@Song Nguyen</Text>
        <Stack direction={'row'} spacing={6}>
          <IconButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </IconButton>
          <IconButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </IconButton>
          <IconButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </IconButton>
        </Stack>
      </Container>
    </Box>
     );
}
 
export default Footer;