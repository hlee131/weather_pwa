import React, { Fragment, useEffect, useState } from "react";

import useStore from "../../hooks/useStore";

export default function Temperature() {
  const [temperature, setTemperature] = useState("");
  const { data, loading } = useStore((state) => ({
    data: state.data,
    loading: state.loading,
  }));

  useEffect(() => {
    if (!loading) {
      setTemperature(Math.round(data.hourly.temperature_2m[0]));
    }
  }, [loading, data]);

  return (
    <div
      className={`${loading ? "" : "cursor-pointer"
        } w-3/6 h-full flex flex-col items-center justify-center neu-tl-dr p-2`}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          <h1 className="text-8xl text-blue-800">
            {temperature}
            <span className="text-6xl">°C</span>
          </h1>
          <p className="text-sm text-blue-500">Temperature</p>
        </Fragment>
      )}
    </div>
  );
}
