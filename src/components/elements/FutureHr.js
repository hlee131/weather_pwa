import React, { useState, useRef, useEffect } from "react";
import Chart from "chart.js";

import useStore from "../../hooks/useStore";

export default function FutureHr() {
  const [temps, setTemps] = useState([]);
  const [rainProbs, setRainProbs] = useState([]);
  const [active, setActive] = useState("rain");
  const [times, setTimes] = useState([]);
  const [chart, setChart] = useState();
  const chartRef = useRef(null);
  const { data, loading } = useStore((state) => ({
    data: state.data,
    loading: state.loading,
  }));

  useEffect(() => {
    if (!loading) {
      setTemps(data.hourly.temperature_2m.slice(1));
      setRainProbs(data.hourly.rain.slice(1));
      setTimes(data.hourly.time.slice(1).map(dtStr => new Date(dtStr).getHours()));
    }
  }, [loading, data]);

  useEffect(() => {
    if (times.length !== 0) {
      const ctx = chartRef.current.getContext("2d");
      setChart(
        new Chart(ctx, {
          type: "line",
          data: {
            labels: times,
            datasets: [
              {
                data: active === "temp" ? temps : rainProbs,
                borderColor: "rgb(37, 99, 235)",
                backgroundColor: "rgba(37, 99, 235, 0.3)",
              },
            ],
          },
          options: {
            scales: {
              yAxes:
                active === "rain"
                  ? [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ]
                  : [],
            },
            title: {
              display: true,
              text: "Next 12 Hours",
            },
            legend: { display: false },
          },
        })
      );
    }
  }, [times]);

  const onClick = (active) => {
    setActive(active);
    chart.data.datasets[0].data = active === "rain" ? rainProbs : temps;
    chart.options.scales.yAxes =
      active === "rain"
        ? [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ]
        : [];
    chart.update();
  };

  return loading ? (
    <div className="neu-t-d min-h-full min-w-full flex items-center justify-center">
      Loading...
    </div>
  ) : (
    <div className="neu-t-d max-w-full relative">
      <canvas id="chart" ref={chartRef} className="max-w-full" />
      <div className="absolute min-w-full top-0 p-1 flex items-center justify-around">
        <button
          className={`text-blue-600 text-sm mr-2 p-1 pt-0 rounded-md border border-blue-600 ${active === "rain" ? "pressed" : ""
            }`}
          onClick={() => onClick("rain")}
        >
          Rain
        </button>
        <button
          className={`text-blue-600 text-sm ml-2 p-1 pt-0 rounded-md border border-blue-600 ${active === "temp" ? "pressed" : ""
            }`}
          onClick={() => onClick("temp")}
        >
          Temp
        </button>
      </div>
    </div>
  );
}
