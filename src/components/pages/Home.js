import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import Webcam from "../elements/Webcam";
import SearchBar from "../elements/SearchBar";
import Temperature from "../elements/Temperature";
import FutureHr from "../elements/FutureHr";
import RainAmount from "../elements/RainAmount";
import LastUpdated from "../elements/LastUpdated";
import Error from "./Error";

import useStore from "../../hooks/useStore";

export default function Home() {
  const { loading, setData, setLoading, error } = useStore((state) => ({
    loading: state.loading,
    setData: state.setData,
    setLoading: state.setLoading,
    cachedData: state.cachedData,
    error: state.error,
  }));
  const [location, setLocation] = useState();
  const [cacheAge, setCacheAge] = useState(undefined);

  useEffect(() => {
    if (location !== undefined) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${location[0]}&lon=${location[1]}&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`
        )
        .then((res) => {
          setData(res.data);
          setLoading(false);
          if (Object.keys(res.headers).includes("x-cached-response")) {
            let now = new Date().getTime() / 1000;
            let cachedTime = res.data.current.dt;
            let difference = now - cachedTime;
            let minutes = Math.floor(difference / 60);
            let seconds = Math.floor(difference);
            let hours = Math.floor(minutes / 60);
            minutes %= 60;
            if (hours === 0) {
              setCacheAge(
                minutes === 0 ? `${seconds} second(s)` : `${minutes} minute(s)`
              );
            } else {
              setCacheAge(`${hours} hour(s)`);
            }
          } else {
            setCacheAge(undefined);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location]);

  if (error) return <Error />;

  return (
    <Fragment>
      <div className="w-screen h-screen" style={{ background: "#f7feff" }}>
        <SearchBar setLocation={setLocation} />
        <div
          style={{ height: "90%" }}
          className="grid-phone w-full p-4 pt-2 box-border bottom-0 absolute"
        >
          <Webcam location={location} loading={loading} />
          <div className="flex flex-row items-center justify-between">
            <Temperature />
            <RainAmount />
          </div>
          <FutureHr />
        </div>
      </div>
      {cacheAge !== undefined ? <LastUpdated cacheAge={cacheAge} /> : ""}
    </Fragment>
  );
}
