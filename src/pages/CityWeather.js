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

const CityWeather = (props) => {
  const classes = useStyles();
  const { data, dispatch } = useContext(WeatherContext);
  const query = props.match;

  useEffect(() => {
    //search weather detail by city name
    const search = async ({ params }) => {
      try {
        const data = await getWeatherByCityName(params.name);
        const newinfo = { cnt: data.weather.length, list: [data] };
        dispatch({ type: "FETCH_WEATHER", data: newinfo });
      } catch (error) {
        console.log(error);
      }
    };
    search(query);
  }, [query]);

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
        {!!data.weatherData ? (
          !!data.weatherData.list &&
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
        <Footer>2021 Fidenz Technologies</Footer>
      </Container>
    </Paper>
  );
};

export default CityWeather;
