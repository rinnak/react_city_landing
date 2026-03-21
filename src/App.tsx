import { Header } from "./components/Header/Header";
import { Information } from "./components/Information/Information";
import { EntertainmentPlaces } from "./components/EntertainmentPlaces/EntertainmetPlaces";
import { navLinks, cityData, places, monuments } from "./data/data";
import "./App.css";
import { Monuments } from "./components/Monuments/Monuments";
import { HistoryFact } from "./components/HistoryFact/HistoryFact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header title={cityData.name} links={navLinks} />
      <Information city={cityData} />
      <EntertainmentPlaces places={places} />
      <Monuments monuments={monuments} />
      <HistoryFact />
      <Footer />
    </div>
  );
}

export default App;
