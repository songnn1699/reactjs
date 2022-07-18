
import { useColorMode, useMediaQuery, Button, Image } from '@chakra-ui/react';
import {  Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import React from   'react';
function Header(){

    const {colorMode} =useColorMode();
    const isdark= colorMode === 'dark';
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Stack >
            <Circle position='absolute' bg='cyan.100' opacity='0.1' 
                width='300px' height='300px' alignSelf='flex-end'>
            </Circle>
            <Flex direction={isNotSmallerScreen ? 'row' : 'column'}
                spacing ='200px' p={isNotSmallerScreen ?'32' : '0'}
                alignSelf='flex-start'    
            >
                <Box mt={isNotSmallerScreen ? '0' : 16} align='flex-start'>
                    <Text fontSize="20px" fontWeight='semibold'>Hi, i am</Text>
                    <Text fontSize="50px" fontWeight='bold' bgGradient='linear(to-r, cyan.400, blue.400, purple.400)' bgClip='text'>Song Nguyen Ngoc</Text>
                    <Text color={isdark ? 'gray.200': 'gray.500'}>Android, Java, Flutter, Firebase</Text>
                    <Button marginTop='10px' colorScheme="blue" onClick={() =>
                        window.open("https://www.facebook.com/ngsong699")}>Hire Me
                    </Button>
                </Box>
                <Image alignItems='center' alignSelf='center' mt={isNotSmallerScreen ? '0' :12} 
                    mb={isNotSmallerScreen ? '0' : 12} borderRadius='full' backgroundColor='transparent' boxShadow='lg' boxSize='300px' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                    >
                </Image>
                
            </Flex>
            
        </Stack>
    )
}
export default Header;