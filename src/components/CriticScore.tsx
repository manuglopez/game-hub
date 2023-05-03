import React from 'react';
import {Badge, HStack} from "@chakra-ui/react";

interface Props {
    score: number
}

const CriticScore = ({score}: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'
    return (
        <HStack>
            <Badge fontSize='14px' paddingX={2} borderRadius={5} colorScheme={color}>{score}</Badge>
        </HStack>

    );
};

export default CriticScore;