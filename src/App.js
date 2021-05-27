import { BrowserRouter  as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import CityWeather from "./pages/CityWeather";
import { WeatherProvider } from "./reducer/weatherProvider";

console.log('aaadppp',process.env.PUBLIC_URL)

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <WeatherProvider>
        <Route path="/" exact component={Home} />
        <Route path="/cityweather/:name" component={CityWeather} />
      </WeatherProvider>
    </Router>
  );
}

export default App;
