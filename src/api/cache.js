import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

async function fetchWithCache(config) {
  const path = config.path;
  const params = config.params;
  try {
    const cacheKey = JSON.stringify(config); //creating a cacheKey for storing data
    const data = localStorage.getItem(cacheKey);
    if (data) {
      const parsedData = JSON.parse(data);
      //cache expire after 5 min
      if (Date.now() - parsedData?.time < 5 * 60 * 1000) {
        return parsedData.data;
      }
    }

    const res = await api.get(`${path}`, { params: params });

    localStorage.setItem(
      cacheKey,
      JSON.stringify({ time: Date.now(), data: res.data })
    );

    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export default fetchWithCache;
