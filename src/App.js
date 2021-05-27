import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import CityWeather from "./pages/CityWeather";
import { WeatherProvider } from "./reducer/weatherProvider";

function App() {
  return (
    <Router>
      <WeatherProvider>
        <Route path="/" exact component={Home} />
        <Route path="/cityweather/:name" component={CityWeather} />
      </WeatherProvider>
    </Router>
  );
}

export default App;
