import { Heading, Text, Stack, AspectRatio, Center, Container, Box} from "@chakra-ui/react";

const About = () => {
    return (
        <Stack mt={70} w='100%' > 
            <Heading className="heading-style" mb={20} >About page</Heading>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            <Heading>Contact</Heading>
            
            <AspectRatio maxWidth='2000px' ratio={16/ 9}>
                <iframe
                     alt="" 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.293716588174!2d105.78664862124398!3d20.980860228820664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad71%3A0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCB2aeG7hW4gdGjDtG5n!5e0!3m2!1svi!2s!4v1660029039110!5m2!1svi!2s"></iframe>
            </AspectRatio>
            
        
        
        </Stack>
     );
}
 
export default About;