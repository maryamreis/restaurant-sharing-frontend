import { Box, Button, Flex, Heading, Spacer, Stack } from "@chakra-ui/react";

interface INavBar{

}

function NavBar(): JSX.Element {
    return(
        <Box my="32px" mx="10">
            <Flex>
                <Box>
                    <Heading color="pink.500">Foodie Friends</Heading>
                </Box>

                <Spacer/>

                <Box>
                    <Stack direction="row">
                        <Button mr="2" variant="ghost" >Home</Button>
                        <Button variant="ghost" >Search</Button>
                        <Button variant="ghost">Share</Button>
                    </Stack>
                    
                </Box>
                
            </Flex>
            
        </Box>


    );
};

export default NavBar
