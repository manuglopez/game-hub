import React from 'react';
import useGenres from "@/hooks/useGenres";
import {HStack, List, ListItem, Image, Text, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";

const GenreList = () => {
    const {data, error, isLoading} = useGenres()
    if(isLoading) return <Spinner/>
    if(error) return null
    return (
        <div>
            <List>
                {data.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius='5px' src={getCroppedImageUrl(genre.image_background)} alt={genre.name}/>
                            <Text fontSize='lg'> {genre.name}</Text>
                        </HStack>
                    </ListItem>)}
            </List>

        </div>
    );
};

export default GenreList;