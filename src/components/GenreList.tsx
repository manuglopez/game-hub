import React from 'react';
import useGenres, {Genre} from "@/hooks/useGenres";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre}: Props) => {
    const {data, error, isLoading} = useGenres()
    if (isLoading) return <Spinner/>
    if (error) return null
    return (
        <div>
            <List>
                {data.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius='5px' src={getCroppedImageUrl(genre.image_background)}
                                   alt={genre.name}/>
                            <Button fontSize='lg' variant='link'
                                    onClick={() => onSelectGenre(genre)}> {genre.name}</Button>
                        </HStack>
                    </ListItem>)}
            </List>

        </div>
    );
};

export default GenreList;