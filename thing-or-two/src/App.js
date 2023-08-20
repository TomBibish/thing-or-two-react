import React ,{ useState, useEffect } from "react";
import axios from "axios";
import SongList from "./components/songs/SongList";

const App = () => {
const [allSongs, getSongs] = useState([]);
useEffect( () =>{
  axios
  .get("http://localhost:4000/song")
  .then((data) => getSongs(data.data.songs))}
  , []
)
return (
  <div>
    <SongList songs ={ allSongs }/>
  </div>
);
}

export default App;
