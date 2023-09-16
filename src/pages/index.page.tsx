import { NextPage } from "next"
import { Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import database from "../resources/data.json"
import { useSpeechSynthesis } from "react-speech-kit";

interface IDatabase {
    database: IData[]
}

interface IData {
    name: string,
    description: string,
    category: string
}

const Home: NextPage = () => {

    const { speak } = useSpeechSynthesis();


    const baseImageLocation = "/images/";
    const baseAudioLocation = "/audios/";

    const organizeDataByCategory = (database: IDatabase) => {
        let organizedData: IData[] = []

        database.database.filter(data => organizedData.push(data))

        return organizedData.sort((a, b) => {
            let fa = a.category.toLowerCase(),
                fb = b.category.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });

    }



    const playAudio = (data: IData) => {
        const audio = new Audio(`${baseAudioLocation}${data.name}.m4a`)
        speak({text: data.description})
        // audio.play()
    }

    return (
        <Flex maxH="max-content" justifyContent="center"
            w="100vw !important" margin="16px">
            <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                {database.database.length !== 0 && organizeDataByCategory(database).map((data, i) => (
                    <GridItem key={i} justifyContent="center" onClick={() => playAudio(data)}>
                        <Flex cursor="pointer" borderRadius="16px" border="1px solid #E3E5E5" direction="column" >
                            <Image objectFit="fill" borderRadius="16px" maxH="500px" src={`${baseImageLocation}${data.name}.jpg`} />
                        </Flex>
                    </GridItem>))}
            </Grid>
        </Flex>
    )
}

export default Home;
