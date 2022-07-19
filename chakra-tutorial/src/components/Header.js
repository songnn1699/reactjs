import { Flex, Stack, Circle, useMediaQuery, Box, Text, Button, Image } from '@chakra-ui/react';
import React from 'react';




function Header(){
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px")
    return(
        <Stack>
            <Circle position='absolute' opacity='0.1' bg='cyan.100' w='300px' h='300px' alignSelf='flex-end'></Circle>
            <Flex direction={isNotSmallerScreen ? 'row' : 'column'} alignSelf='flex-start' p={isNotSmallerScreen ? '30':'10'} >
                <Box marginTop={isNotSmallerScreen ? 0 : 20} alignSelf='flex-start'>
                    <Text fontSize='20px' fontWeight='semibold'>Hi, i am</Text>
                    <Text fontSize='50px' fontWeight='bold' bgGradient='linear(to-r, aquamarine, beige, red.300)' bgClip='text'>Song Nguyen Ngoc</Text>
                    <Text color='gray.200'>Android, Java, Python, Java Script, Angular, ReactJS, Redux</Text>
                    <Button marginTop='10px' colorScheme='red' onClick={() => window.open("")}>Hire me</Button>                
                </Box>
                <Image mt={isNotSmallerScreen ? '0': '15'}
                mb={isNotSmallerScreen ? '0': '15'} borderRadius='full' backgroundColor='transparent' boxShadow='lg' boxSize='300px' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'></Image>
            </Flex>
        </Stack>
    )
}

export default Header;