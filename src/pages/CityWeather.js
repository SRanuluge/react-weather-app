/**
 * @author [Sanjeewa Ranulge]
 * @email [sbandara725@mail.com]
 * @create date 2021-05-28 00:20:04
 * @modify date 2021-05-28 00:20:04
 * @desc [weather information search by city name]
 */

import CardI from "../components/CardI";
import Footer from "../components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Paper } from "@material-ui/core";
import { useContext, useEffect } from "react";
import Image from "../assets/Images/card.png";
import Logo from "../components/Logo";
import { WeatherContext } from "../context/weatherContext";
import { getWeatherByCityName } from "../api/service";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  gridList: {
    padding: 50,
  },
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  },
});

const CityWeather = () => {
  const classes = useStyles();
  const { data, dispatch } = useContext(WeatherContext);
  const { name: city } = useParams();

  useEffect(() => {
    //search weather detail by city name
    const search = async (params) => {
      try {
        const data = await getWeatherByCityName(params || "Christchurch");
        const newinfo = { cnt: data.weather.length, list: [data] };
        dispatch({ type: "FETCH_WEATHER", data: newinfo });
      } catch (error) {
        dispatch({ type: "DELETE_WEATHER", data: [] });
        console.log(error);
      }
    };
    search(city);
  }, [city]);

  return (
    <Paper className={classes.paperContainer}>
      <Container maxWidth="sm">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ paddingTop: 50 }}
        >
          <Logo />
          <span style={{ padding: 5, color: "#fff" }}>Weather App</span>
        </Grid>
        {!!data.weatherData.list && data.weatherData.list.length > 0 ? (
          data.weatherData.list.map((value) => (
            <Grid
              className={classes.gridList}
              xs={12}
              sm={12}
              md={12}
              item
              key={value.id}
            >
              <CardI weatherData={value} />
            </Grid>
          ))
        ) : (
          <Grid container justify="center" alignItems="center">
            <h2>No data to show</h2>
          </Grid>
        )}
        <Footer>2023 sranuluge.dev </Footer>
      </Container>
    </Paper>
  );
};

export default CityWeather;
