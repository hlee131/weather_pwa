import React, { useState, Fragment, useEffect } from "react";
import { animated, useTransition } from "react-spring";

import useWebcam from "../../hooks/useWebcam";

export default function Webcam({ location }) {
  /*
    TEST LOCATIONS:
    No cameras: Coari 
    One camera: Hamilton 
    Two cameras: Beijing
    Three cameras: Seattle
    TODO: Autoclick with interval in settings?
    */
  const { cam0, cam1, cam2, loading, cams } = useWebcam(location);
  const [index, setIndex] = useState(0);
  const onBackwards = () =>
    setIndex((state) => (state === 0 ? cams - 1 : state - 1));
  const onForwards = () =>
    setIndex((state) => (state === cams - 1 ? 0 : state + 1));

  const cameras = [
    ({ style }) => (
      <animated.div className="neu-t-d" style={style}>
        <img src={cam0.image} alt={cam0.title} />
        <div className="h-7 flex flex-row justify-around items-center">
          {cams !== 1 ? (
            <span className="cursor-pointer" onClick={onBackwards}>
              &lt;
            </span>
          ) : (
            ""
          )}
          <p className="text-center">{cam0.title}</p>
          {cams !== 1 ? (
            <span className="cursor-pointer" onClick={onForwards}>
              &gt;
            </span>
          ) : (
            ""
          )}
        </div>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div className="neu-t-d" style={style}>
        <img src={cam1.image} alt={cam1.title} />
        <div className="h-7 flex flex-row justify-around items-center">
          {cams !== 1 ? (
            <span className="cursor-pointer" onClick={onBackwards}>
              &lt;
            </span>
          ) : (
            ""
          )}
          <p className="text-center">{cam1.title}</p>
          {cams !== 1 ? (
            <span className="cursor-pointer" onClick={onForwards}>
              &gt;
            </span>
          ) : (
            ""
          )}
        </div>
      </animated.div>
    ),
    ({ style }) => (
      <animated.div className="neu-t-d" style={style}>
        <img src={cam2.image} alt={cam2.title} />
        <div className="h-7 flex flex-row justify-around items-center">
          {cams !== 1 ? (
            <span className="cursor-pointer" onClick={onBackwards}>
              &lt;
            </span>
          ) : (
            ""
          )}
          <p className="text-center">{cam2.title}</p>
          {cams !== 1 ? (
            <span className="cursor-pointer" onClick={onForwards}>
              &gt;
            </span>
          ) : (
            ""
          )}
        </div>
      </animated.div>
    ),
  ];

  // TODO: Fix webcam on load, weird opacity
  const cameraTransitions = useTransition(index, index, {
    from: { opacity: 0, display: "none" },
    enter: { opacity: 1, display: "block" },
    leave: { opacity: 0, display: "none" },
  });

  useEffect(() => setIndex(0), [cam0]);

  return loading ? (
    <div className="neu-t-d">
      <div className="relative overflow-hidden rounded-t-lg w-full h-28 bg-gray-400">
        <div className="load-gradient"></div>
      </div>
      <p className="text-center">Image Loading...</p>
    </div>
  ) : (
    <Fragment>
      {cams === 0 ? (
        <div className="neu-t-d">
          <p className="text-center">No Webcams</p>
        </div>
      ) : (
        cameraTransitions.map(({ item, props, key }) => {
          const Camera = cameras[item];
          return <Camera key={key} style={props} />;
        })
      )}
    </Fragment>
  );
}
