import { NextPage } from "next"
import { Flex, Grid, GridItem, Image, Box } from '@chakra-ui/react';

const Home: NextPage = () => {
    const imageName = ["agua_copo", "banana", "banho", "bolinho", "bolofofo", "brinquedo", "danone_garrafa", "danoninho", "desenho", "livro", "lousa", "mundo_bita", "parquinho", "piscina", "suco"];

    const baseImageLocation = "/images/";
    const baseAudioLocation = "/audios/";


    const playAudio = (data: any) => {
        const audio = new Audio(`${baseAudioLocation}${data}.m4a`)
        audio.play()
    }

    return (
        <Flex maxH="max-content" justifyContent="center"
        w="100vw !important" margin="16px">
            <Grid templateColumns='repeat(2, 1fr)' gap={4}>
            {imageName.length !== 0 && imageName.map((data, i)=> (
            <GridItem key={i} justifyContent="center" onClick={()=> playAudio(data)}>
                <Flex cursor="pointer" borderRadius="16px" border="1px solid #E3E5E5"  direction="column" >
                    <Image objectFit="fill" borderRadius="16px" maxH="500px"  src={`${baseImageLocation}${data}.jpg`} />
                </Flex>
                    </GridItem>))}
            </Grid>
          </Flex>
    )
}

export default Home;
