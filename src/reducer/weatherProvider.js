import React, { useReducer } from "react";
import { WeatherContext } from "../context/weatherContext";
const INITIAL_STATE = {
  weatherData: [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_WEATHER":
      return {
        ...state,
        weatherData: action.data,
      };
    case "DELETE_WEATHER":
      return {
        ...state,
        weatherData: action.data,
      };

    default:
      return state;
  }
}

export const WeatherProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <WeatherContext.Provider value={{ data, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};
