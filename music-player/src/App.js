import { useState } from "react";
import "./styles/app.scss";
import data from "./util";
import Player from "./compoents/Player";
import Song from "./compoents/Song";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
