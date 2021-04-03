import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  id,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) {
      const playPromis = audioRef.current.play();
      if (playPromis !== undefined) {
        playPromis.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <small>{song.artist}</small>
      </div>
    </div>
  );
};

export default LibrarySong;
