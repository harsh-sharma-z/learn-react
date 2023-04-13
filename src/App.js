import "./App.css";
import Props from "./components/Props";
function App() {
  return (
    <div>
      <Props name="Rahul" age="21" city="Mumbai" src="https://i.pinimg.com/736x/fa/9f/e6/fa9fe63fd3366d1bdbb602f54eb2dace.jpg" >
        < p>This is component inside a promp.</p>
      </Props>
      <Props name="Harsh" age="20" city="Mathura" src="https://wallpapers-clan.com/wp-content/uploads/2023/01/anime-aesthetic-boy-pfp-1.jpg"/>
      <Props name="Golu" age="19" city="Patna" src="https://wallpapers.com/images/hd/cool-anime-girl-pfp-aoi-hinami-f7u50zvrx77vpmsr.jpg"/>
    </div>
  );
}

export default App;
