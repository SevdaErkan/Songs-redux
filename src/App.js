import "./styles.css";
import SongList from "./components/SongList";
import SondDetail from "./components/SondDetail";
export default function App() {
  return (
    <div className="App">
      <div className="songList">
        <SongList />
      </div>
      <div className="detail">
        <SondDetail />
      </div>
    </div>
  );
}
