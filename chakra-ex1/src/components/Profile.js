
import { Box, Flex, Heading, Icon, Text, useMediaQuery } from '@chakra-ui/react';
import React from   'react';
import {DiCodeigniter, DiAndroid, DiWebplatform} from 'react-icons/di'

function Profile(){
    const [isNotSmallerScreen] =useMediaQuery('(min-width: 600px)')
    return (
        <Flex direction={isNotSmallerScreen ? 'row': 'column'} width='100%'
            maxWidth={{ base:'100vh', md:'150vh', lg:  '150vh', xl:'150vh' }}>
            <Box alignSelf='center' px='32' py='16'>
                <Heading fontWeight='extrabold' color='cyan.500' fontSize='100px'> 1+</Heading>
                <Text fontSize='20px' color='gray.400'>Years of Experience</Text>
            </Box>
            <Box alignSelf='center' px='32px' py='16px' >
                <Text fontWeight='bold' fontSize='15px'>Product Design Developer...</Text>
                <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8} >
                    <Flex rounded='15px' direction='column' mt={4} bg='blue.400' h='30vh' w='30vh' justify='flex-end'>
                        <Icon color='white' p ='4' as={DiAndroid} w='24' h='24'></Icon>
                        <Text color='white'p ='4' fontSize='x1' fontWeight='semibold'>Android Apps</Text>
                    </Flex>
                    
                    <Flex rounded='15px' direction='column' mt={4} ml={isNotSmallerScreen ? 4 : 0} bg='gray.100' h='30vh' w='30vh' justify='flex-end' _hover={{bg: 'teal.400'}}>
                        <Icon color='black' p ='4' as={DiCodeigniter} w='24' h='24'></Icon>
                        <Text color='black'p ='4' fontSize='x1' fontWeight='semibold'>Flutter Apps</Text>
                    </Flex>

                    <Flex rounded='15px' direction='column' mt={4} ml={isNotSmallerScreen ? 4: 0} bg='teal.200' h='30vh' w='30vh' justify='flex-end' _hover={{bg: 'pink.400'}}>
                        <Icon color='black' p ='4' as={DiWebplatform} w='24' h='24'></Icon>
                        <Text color='black' p ='4' fontSize='x1' fontWeight='semibold'> Web Apps</Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}
export default Profile;