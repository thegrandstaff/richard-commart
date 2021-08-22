import React from 'react';
import {Link} from 'react-router-dom';
import Box from '../UIElements/Box';

const Artist = ({ artistId, artistName, artistEmail, artistAddress, artistTag }) => {
    return (
        <Box>
            <div>
                <p>Name: {artistName}</p>
                <p>Email: {artistEmail}</p>
                <p>Address: {artistAddress}</p>
                <p>{artistTag}</p>
                <Link to={{pathname:`/order-commission/${artistName}`, state:[{
                    name: {artistName}
                    }]}}>
                    <button>Order a Commission</button>
                </Link>
            </div>
        </Box>
    )
}

export default Artist;