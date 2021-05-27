import React from "react";
import { Avatar, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import moment from "moment";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 225,
    padding: 0,
    height: "auto",
  },

  cntnt: {
    padding: 0,
    margin: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
    backgroundColor: "#388ee7",
  },
  paper: {
    color: "#fff",
    fontSize: 11,
  },
  temp: {
    color: "#fff",
    fontSize: "1.7rem",
    fontWeight: "bold",
  },
  grid: {
    textAlign: "center",
    padding: 10,
  },
  gridNa: {
    textAlign: "center",
    padding: 20,
    flexDirection: "column",
    color: theme.palette.text.secondary,
  },
  gridTE: {
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
  gridPr: {
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "0.7rem",
    color: theme.palette.text.secondary,
    padding: 3,
  },
  gridClu: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  nameC: {
    color: "#fff",
    fontSize: "1.3rem",
  },
  tempM: {
    color: "#fff",
    fontSize: "0.7rem",
  },
  cloud: {
    padding: 2,
    color: "#fff",
    fontSize: "0.7rem",
  },
  datt: {
    color: "#fff",
    fontSize: "0.7rem",
  },
}));

const CardI = ({ weatherData }) => {
  const { name, main, sys, dt, weather, wind, visibility } = weatherData;
  //   const theme = useTheme(theme);
  const classes = useStyles();
  const currntTime = moment.unix(dt).format("LT");
  const currntDate = moment.unix(dt).format("LL");
  const sunSet = moment.unix(sys.sunset).format("LT");
  const sunRise = moment.unix(sys.sunrise).format("LT");
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cntnt}>
        <Link style={{ padding: 10 }} to="/">
          <FaAngleLeft styles={{ color: "white", cursor: "pointer" }} />
        </Link>
        <Grid
          item
          style={{ backgroundColor: "#388ee7" }}
          xs={12}
          sm={12}
          md={12}
        >
          <Grid spacing={1}>
            <Grid item container className={classes.gridNa} xs={12} sm={12} md={12}>
              <span className={classes.nameC}>
                {name}, {sys.country}
              </span>
              <span className={classes.datt}>
                {currntTime} {currntDate}
              </span>
            </Grid>

            <Grid item
              xs={12}
              sm={12}
              md={12}
              container
              style={{ justifyContent: "center" }}
            >
              <Grid
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 10,
                }}
                xs={6}
                sm={6}
                md={6}
                item
                container
              >
                <Avatar
                  alt="Remy Sharp"
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: "#388ee7",
                  }}
                  src={
                    "http://openweathermap.org/img/wn/" +
                    weather[0].icon +
                    ".png"
                  }
                />
                <span className={classes.cloud}>
                  {!!weather && weather[0].description}
                </span>
              </Grid>

              <Grid style={{ flexDirection: "column" }} xs={6} sm={6} md={6}>
                <Grid className={classes.grid} item xs={12} sm={12} md={12}>
                  <span className={classes.temp}>{main.temp} &deg;C</span>
                </Grid>

                <Grid
                  container
                  className={classes.gridTE}
                  item
                  xs={12}
                  sm={12}
                  md={12}
                >
                  <span className={classes.tempM}>
                    Temp Min :{main.temp_min}
                  </span>
                  <span className={classes.tempM}>
                    Temp Max :{main.temp_max}
                  </span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            style={{
              backgroundColor: "#383b47",
              justifyContent: "space-evenly",
              padding: 20,
            }}
          >
            <Grid
              container
              className={classes.gridPr}
              item
              xs={12}
              sm={12}
              md={4}
            >
              <span className={classes.paper}>Pressure :{main.pressure}</span>
              <span className={classes.paper}>Humidity :{main.humidity}</span>
              <span className={classes.paper}>Visibility :{visibility}</span>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid className={classes.gridPr} item xs={12} sm={12} md={4}>
              <span className={classes.paper}>{wind.speed}m/s </span>
              <span className={classes.paper}>{wind.deg} Degree</span>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid
              container
              className={classes.gridPr}
              item
              xs={12}
              sm={12}
              md={3}
            >
              <span className={classes.paper}>Sunrise :{sunRise}</span>
              <span className={classes.paper}>Sunset :{sunSet}</span>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default CardI;
