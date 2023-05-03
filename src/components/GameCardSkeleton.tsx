import React from 'react';
import {Card, CardBody} from "@chakra-ui/card";
import {Skeleton, SkeletonText} from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (

            <Card height='100%'>
                <Skeleton height='200px'/>
                <CardBody>
                    <SkeletonText/>
                </CardBody>
            </Card>

    );
};

export default GameCardSkeleton;