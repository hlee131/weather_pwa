import React, { useState, useEffect, Fragment } from "react";

import useStore from "../../hooks/useStore";

export default function RainAmount() {
  const [mm, setMm] = useState(0);
  const { data, loading } = useStore((state) => ({
    data: state.data,
    loading: state.loading,
  }));

  useEffect(() => {
    if (!loading) {
      try {
        // TODO: Sometimes data.current.rain.1h isn't present
        setMm(data.current.rain["1h"]);
      } catch {
        setMm(0);
      }
    }
  }, [loading, data]);

  return (
    <div
      style={{ width: "40%" }}
      className={`${
        loading ? "" : "cursor-pointer"
      } h-full flex flex-col items-center justify-center neu-tr-dl p-4`}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          <h1 className="text-6xl text-blue-800">{Math.round(mm)}</h1>
          <p className="text-sm text-blue-500 text-center">
            Rain In Last Hr (mm)
          </p>
        </Fragment>
      )}
    </div>
  );
}
