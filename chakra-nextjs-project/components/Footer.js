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
    Center,
    AspectRatio,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';




const Footer = () => {
    return (
      
        <Box
          align="center"
          bottom={0}
          bg={useColorModeValue('gray.50', 'gray.900')}
          color={useColorModeValue('gray.700', 'gray.200')}
          zIndex={9999999}
          position={'fixed'}
          w={'100%'}
          >
          
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
            
              {/* <AspectRatio maxWidth='500px' ratio={16/ 9}>
                <iframe
                    alt="" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.293716588174!2d105.78664862124398!3d20.980860228820664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad71%3A0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCB2aeG7hW4gdGjDtG5n!5e0!3m2!1svi!2s!4v1660029039110!5m2!1svi!2s"></iframe>
              </AspectRatio> */}
            
          </Box>
    
     );
}
 
export default Footer;