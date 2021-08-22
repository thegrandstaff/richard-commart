import React from 'react';

import '../App.css';

import ArtistsList from '../Components/ArtistsList';

const DUMMY_ARTISTS = [
    {
        artistId: 1,
        artistName: "Arty McArty",
        artistEmail: "arty@commart.com",
        artistAddress: "1 Arty Drive",
        artistTag: "Digital Artist"
    },
    {
        artistId: 2,
        artistName: "Da Vinky",
        artistEmail: "davinky@commart.com",
        artistAddress: "2 Da Vinky Circle",
        artistTag: "Physical Artist"
    },
    {
        artistId: 3,
        artistName: "Richard Dalmacio",
        artistEmail: "richard_dalmacio@hotmail.com",
        artistAddress: "401 Fake Address",
        artistTag: "Digital Artist"
    }
];

const Artists = () => {
    return <ArtistsList items = {DUMMY_ARTISTS}/>;
}

export default Artists;