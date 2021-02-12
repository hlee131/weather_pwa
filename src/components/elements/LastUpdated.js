import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function LastUpdated({ cacheAge }) {
  const [displayed, setDisplayed] = useState(true);

  const spring = useSpring({
    to: {
      opacity: displayed ? "100%" : "0%",
      bottom: displayed ? "0.5rem" : "-0.5rem",
    },
    from: {
      opacity: "0%",
      bottom: "-0.5rem",
    },
  });

  const onClick = () => setDisplayed(false);

  return (
    <animated.div
      className={`p-2 z-10 fixed inset-x-2 bottom-2 bg-red-500 text-white rounded-md`}
      style={spring}
    >
      <div className="flex flex-row justify-around">
        <h1>Data last updated {cacheAge} ago</h1>
        <p className={displayed ? "cursor-pointer" : ""} onClick={onClick}>
          X
        </p>
      </div>
    </animated.div>
  );
}
