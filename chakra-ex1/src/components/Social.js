
import { HStack, Icon } from '@chakra-ui/react';
import React from   'react';
import {FaSpotify, FaFacebookF, FaGoogle, FaShopify} from 'react-icons/fa'


function Social(){
    return (
        <HStack spacing='30'>
            <Icon as={FaFacebookF} boxsize='50'></Icon>
            <Icon as={FaSpotify} boxsize='50' ></Icon>
            <Icon as={FaGoogle} boxsize='50' ></Icon>
            <Icon as={FaShopify} boxsize='50' ></Icon>
        </HStack>
    )
}
export default Social;