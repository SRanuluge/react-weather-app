import fetchWithCache from "./cache";

export const getWeatherByCityCode = (cityCode) => {
  return fetchWithCache({
    path: "/group?",
    params: {
      id: cityCode,
      units: "metric",
      appid: "eadfe045227521adc8b42decea6ed4c5",
    },
  });
};

export const getWeatherByCityName = (citiName) => {
  return fetchWithCache({
    path:"/weather",
    params: {
      q: citiName,
      units: "metric",
      appid: "eadfe045227521adc8b42decea6ed4c5",
    },
  });
};
