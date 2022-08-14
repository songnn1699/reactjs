import { useColorMode, IconButton, Icon } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const DarkModeSwitch =() => {
    const {colorMode, toggleColorMode }= useColorMode();
    const iconColor ={
        ligt: 'black',
        dark: 'white'
    }
    return (
        <IconButton
            aria-label="Toggle dark mode"
            icon ={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
            onClick={toggleColorMode}
            color={iconColor[colorMode]}
        />
    )
} 
export default DarkModeSwitch;