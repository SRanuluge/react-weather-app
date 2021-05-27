/**
 * @author [Sanjeewa Ranulge]
 * @email [sbandara725@mail.com]
 * @create date 2021-05-28 00:23:45
 * @modify date 2021-05-28 00:23:45
 * @desc []
 */

import InputValue from "../components/InputValue";
import CardH from "../components/CardH";
import ButtonX from "../components/ButtonX";
import Footer from "../components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Paper } from "@material-ui/core";
import { useState, useEffect, useContext } from "react";
import Image from "../assets/Images/h_dash.png";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { city } from "../util.js/city";
import { WeatherContext } from "../context/weatherContext";
import { getWeatherByCityCode } from "../api/service";

const useStyles = makeStyles({
  gridList: {
    paddingBottom: 50,
  },
  textField: {
    alignSelf: "center",
    justifyContent: "center",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",

    backgroundSize: "cover",
  },
});

const Home = () => {
  const classes = useStyles();
  const [inputValue, setinputValue] = useState("");
  const { data, dispatch } = useContext(WeatherContext);

  //Delete a card from dash board
  const rmoveItem = async (cardId) => {
    let newArray = await data.weatherData.list.filter(
      (element) => element.id !== cardId
    );
    newArray = { cnt: newArray.length, list: newArray };
    dispatch({ type: "DELETE_WEATHER", data: newArray });
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    //concat all City Code as a one string in City array and fetching dashboard weather detail and fetched data dispatch to reducer using context API
    const cityConcat = async () => {
      let newCityCode = "";
      city.List.map((item) => {
        newCityCode = newCityCode + "," + item.CityCode;
      });
      const cityCodes = newCityCode.replace(/^,/, "");
      try {
        const data = await getWeatherByCityCode(`${cityCodes}`);
        dispatch({ type: "FETCH_WEATHER", data });
      } catch (error) {
        console.log(error);
      }
    };
    cityConcat();
  }, []);
  return (
    <Paper className={classes.paperContainer}>
      <Container maxWidth="md">
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
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ backgroundColor: null, padding: 50 }}
        >
          <InputValue onChange={(e) => setinputValue(e.target.value.trim())} />
          {!!inputValue && inputValue.length > 0 ? (
            <Link to={`/cityweather/${inputValue}`}>
              {" "}
              {/* /**set query params */}
              <ButtonX />
            </Link>
          ) : (
            <ButtonX />
          )}
        </Grid>
        {!!data && !!data.weatherData ? (
          <Grid container spacing={3} className={classes.gridList}>
            {!!data.weatherData.list &&
              data.weatherData.list.map((value) => (
                <Grid xs={12} sm={6} md={4} item key={value.id}>
                  <CardH onClick={rmoveItem} weatherData={value} />
                </Grid>
              ))}
          </Grid>
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

export default Home;
