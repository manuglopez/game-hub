import {Game} from "@/hooks/useGames";
import {Card, CardBody, CardFooter} from "@chakra-ui/card";


import {Heading, Image} from "@chakra-ui/react";
import PlatformIconList from "@/components/PlatformIconList";
import CriticScore from "@/components/CriticScore";
import getCroppedImageUrl from "@/services/image-url";


interface Props{
    game:Game
}

const GameCard = ({game}:Props) => {
    return (
        <Card height='100%' >
            <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
            </CardBody>
            <CardFooter justifyContent='space-between'>

                    <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
                    <CriticScore score={game.metacritic}/>

            </CardFooter>
        </Card>
    );
};

export default GameCard;