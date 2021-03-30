import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
  };
  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <small>{song.artist}</small>
      </div>
    </div>
  );
};

export default LibrarySong;
