import React from 'react';
import {Box, Flex, Heading, Text, useMediaQuery, Icon} from '@chakra-ui/react'
import {DiAndroid, DiPython, DiTerminal} from 'react-icons/di'

function Profile(){
    const [isNotSmallerScreen] =useMediaQuery('(min-width: 600px')



    return(
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} width='80%'>
            <Box alignSelf='center' px='32' py ='16'>
                <Heading fontWeight='extrabold' color='cyan.400' fontSize='100px'>
                    9+
                </Heading>
                <Text fontSize='20px' color='gray.400'>Years of Experience</Text>
            </Box>
            <Box alignSelf='center' px='32' py ='16'>
                <Text fontWeight='bold' fontSize='20px' >Death is like the wind, always by my side</Text>
                <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8} >
                    <Flex rounded='15px' direction='column' mt={4} bg='blue.400' h='30vh' w='30vh' justify='flex-end' _hover={{bgGradient: 'linear(to-r, red.500, yellow.500)',}}>
                        <Icon color='white' p ='4' as={DiAndroid} w='24' h='24'></Icon>
                        <Text textShadow='1px 1px gray' color='white'p ='4' fontSize='x1' fontWeight='semibold'>Android Apps</Text>
                    </Flex>
                    
                    <Flex rounded='15px' direction='column' mt={4} ml={isNotSmallerScreen ? 4 : 0} bg='gray.100' h='30vh' w='30vh' justify='flex-end' _hover={{bg: 'teal.400'}}>
                        <Icon color='black' p ='4' as={DiPython} w='24' h='24'></Icon>
                        <Text textShadow='1px 1px gray' color='black'p ='4' fontSize='x1' fontWeight='semibold'>Python Apps</Text>
                    </Flex>

                    <Flex rounded='15px' direction='column' mt={4} ml={isNotSmallerScreen ? 4: 0} bg='teal.200' h='30vh' w='30vh' justify='flex-end' _hover={{bg: 'pink.400'}}>
                        <Icon color='black' p ='4' as={DiTerminal} w='24' h='24'></Icon>
                        <Text textShadow='1px 1px gray' color='black' p ='4' fontSize='x1' fontWeight='semibold'> System </Text>
                    </Flex>
                </Flex>
            </Box>

        </Flex>
    )
}

export default Profile;