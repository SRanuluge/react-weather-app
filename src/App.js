import {
  createHashRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import CityWeather from "./pages/CityWeather";
import { WeatherProvider } from "./reducer/weatherProvider";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} index element={<Home />} />
      <Route path={"/cityweather/:name"} element={<CityWeather />} />
    </>
  )
);

function App() {
  return (
    <WeatherProvider>
      <RouterProvider router={router} />
    </WeatherProvider>
  );
}

export default App;
