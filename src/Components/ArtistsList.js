import React from 'react';
import Artist from './Artist';

import './ArtistsList.css';

const ArtistsList = ({items}) => {
    if (items.length === 0) {
        return (
            <div className="artists-list">
                <h1>No artists available.</h1>
            </div>
        );
    }

    return (
        <ul className="artists-list">
            <h1>ARTISTS</h1>
            {items.map(artist => (
                <Artist
                    key={artist.artistId}
                    artistId={artist.artistId}
                    artistName={artist.artistName}
                    artistEmail={artist.artistEmail}
                    artistAddress={artist.artistAddress}
                    artistTag={artist.artistTag}
                />
            ))}
        </ul>
    );
};

export default ArtistsList;