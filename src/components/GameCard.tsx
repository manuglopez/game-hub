import {Game} from "@/hooks/useGames";
import {Card, CardBody, CardFooter} from "@chakra-ui/card";


import {Heading,Image} from "@chakra-ui/react";


interface Props{
    game:Game
}

const GameCard = ({game}:Props) => {
    return (
        <Card borderRadius={10} overflow={"hidden"}>
            <Image src={game.background_image} alt={game.name}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
            </CardBody>
            <CardFooter>Footer</CardFooter>
        </Card>
    );
};

export default GameCard;