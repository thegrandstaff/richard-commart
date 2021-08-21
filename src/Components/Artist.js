import React from 'react';
import Box from '../UIElements/Box';

const Artist = ({ artistId, artistName, artistEmail, artistAddress, artistTag }) => {
    return (
        <Box>
        <div>
            <p>Name: {artistName}</p>
            <p>Email: {artistEmail}</p>
            <p>{artistTag}</p>
        </div>
        </Box>
    )
}

export default Artist;