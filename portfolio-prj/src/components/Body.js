import { Stack,HStack, IconButton, Button, useDisclosure
    ,Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
 } from '@chakra-ui/react';
import React from 'react';
import { FaGoogle, FaSpotify, FaTwitter} from 'react-icons/fa'




function Body(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return(
        <Stack spacing={5}>
            <HStack spacing='30' >
                <IconButton as={FaGoogle} boxSize='50' isRound='true'></IconButton>
                <IconButton as={FaSpotify} boxSize='50' isRound='true' ></IconButton>
                <IconButton as={FaTwitter} boxSize='50' isRound='true' ></IconButton>
            </HStack>
            <Button _hover={{bgGradient:'linear(to-r, aquamarine, beige)', textColor:'black'}}  textColor='white' bg='gray.500'
                ref={btnRef} onClick={onOpen}>Create</Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='lg'
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>
                <DrawerBody>
                    <Input placeholder='Type here...' />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Stack>
    )
}

export default Body;