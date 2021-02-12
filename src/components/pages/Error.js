import React from "react";

export default function Error() {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center flex-col"
      style={{ background: "#f7feff" }}
    >
      <h1 className="text-xl font-bold m-2">There was an error. Please try:</h1>
      <div className="h-1/4 w-10/12 text-center neu-t-d m-2 p-2 flex flex-col items-center justify-center">
        <p>Turning on Wifi</p>
        {/* https://www.svgrepo.com/svg/313378/wifi */}
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 24 24"
          id="09a1826c-a847-45ea-a1ae-156639e62658"
          data-name="Livello 1"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <title>prime</title>
          <g id="eaf1e815-7158-4e33-a8eb-aa74e4018c4c" data-name="wifi">
            <path d="M14.26,16.68a2.77,2.77,0,0,1,0,4,3.1,3.1,0,0,1-4.24,0,2.77,2.77,0,0,1,0-4A3.1,3.1,0,0,1,14.26,16.68Z" />
            <path d="M7.06,16.13L4.3,13.24a11.89,11.89,0,0,1,16.23,0l-2.76,2.89A7.84,7.84,0,0,0,7.06,16.13Z" />
            <path d="M21.62,11.46a13.48,13.48,0,0,0-18.41,0L0.45,8.56a17.53,17.53,0,0,1,23.93,0Z" />
          </g>
        </svg>
      </div>
      <div className="h-1/4 w-10/12 text-center neu-t-d m-2 p-2 flex flex-col items-center justify-center">
        <p>Turning off Airplane Mode</p>
        {/* https://www.svgrepo.com/svg/27210/airplane-flight */}
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="80px"
          height="80px"
          viewBox="0 0 959.192 959.192"
          className="m-1"
        >
          <g>
            <path d="M923.777,2.34l-101.5,46.2c-6.5,3-12.5,7.1-17.6,12.2l-165.4,165.5l-569.6-68.3c-10.3-1.2-20.7,2.3-28,9.7l-31.7,31.7   c-16.8,16.8-11.6,45.2,10.1,54.9l408.2,183l-117.2,117.2h-204.7c-9,0-17.6,3.6-24,9.899l-17.1,17.2c-17,17-11.4,45.7,10.6,55.101   l172.7,74l74,172.699c9.4,22,38.2,27.601,55.101,10.601l17.199-17.2c6.4-6.4,9.9-15,9.9-24v-204.7l117.2-117.2l183,408.301   c9.7,21.699,38.1,26.899,54.899,10.1l31.7-31.7c7.4-7.4,10.9-17.7,9.7-28l-68.4-569.6l165.5-165.5c5.101-5.1,9.2-11,12.2-17.6   l46.2-101.5C966.478,14.44,944.877-7.26,923.777,2.34z" />
          </g>
        </svg>
      </div>
      <div className="h-1/4 w-10/12 text-center neu-t-d m-2 p-2 flex flex-col items-center justify-center">
        <p>Reloading the Page</p>
        {/* https://www.svgrepo.com/svg/105981/reload */}
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 488.482 488.482"
        >
          <g>
            <g>
              <path d="M456.382,359.741l4.1-6.6c1.2-2.3,2.4-4.6,3.5-6.9c2.3-4.7,4.8-9.2,6.8-14c3.7-9.7,7.7-19.3,10.1-29.4    c3.1-10,4.4-20.3,6.1-30.6c0.7-5.2,0.7-10.4,1.1-15.6l0.4-7.8v-0.5v-0.2v-0.1v-1.1v-0.9l-0.1-1.8l-0.2-3.6l-0.6-14.3l-2.3-16.2    c-0.4-2.7-0.7-5.5-1.3-8l-1.9-7.6c-1.4-5-2.4-10.2-4.2-15.1c-6.4-19.9-16.1-38.7-27.7-56c-12.1-17.1-26.6-32.3-42.7-45.6    c-15.7-13-33.1-24.5-52-33.1c-7.5-3.2-15.3-6.1-23-8.8l-11.9-3.2c-4-1-7.9-2.3-12-2.8l-12.2-2l-6.1-1l-6.2-0.4l-12.3-0.7l-3.1-0.2    h-0.8h-0.2h-1.2h-0.4l-1.4,0.1l-5.6,0.2l-11.3,0.5c-1.8,0-4,0.4-6.1,0.7l-6.4,0.9l-12.8,1.9l-12,3c-4,1.1-8.1,1.8-11.9,3.4    l-11.6,4.2l-5.8,2.2l-5.6,2.7l-11.1,5.4c-58.8,30.5-101.2,89.3-112,153.5c-0.6,4.6-1.1,9.1-1.5,13.4c-0.4,4.3-0.8,8.5-0.5,12.5    c0.1,2.4,0.2,4.6,0.4,6.9c-11.1-17.4-23.7-33.9-34-51.8c-0.8-1.4-5.2-1.7-7.7-1c-4.9,1.3-7.2,5.4-8.1,9.7    c-2.9,14.3,0.3,27.3,6.4,38.6c11.5,21.3,22.1,43.2,35.8,63.2l0.3,0.5c0.5,0.7,1,1.4,1.7,2.1c7,7.6,18.9,8.1,26.6,1    c4.9-4.5,9.6-9.2,14.1-14.2c3.1-2.3,6.2-4.5,9.2-6.9c19.1-15,37.5-30.9,52.7-50.1c4.3-5.5,5.5-12.7-1-19.1    c-5.9-5.8-13.6-7.1-19.5-3.1c-10.6,7.2-21.3,14.3-30.6,23c-8.6,8-16.8,16.4-24.9,24.9c0.5-1.6,1-3.3,1.5-5.2    c1.5-5.2,3-11.1,4.2-17.9c0.4-3.4,1.7-6.8,2.4-10.5c0.8-3.7,1.6-7.5,2.4-11.5c7-28.5,20.7-55.1,39.3-77.5    c18.5-22.5,42.5-40,68.5-52.3c5.1-2.8,10.7-4.5,16.1-6.6c5.4-2.3,11-3.5,16.7-5.1c2.8-0.7,5.6-1.7,8.4-2.1l8.2-1.3l8.3-1.4    l9.5-0.6c23.4-1.5,46.9,1.1,69.2,8.2c44.7,13.9,84.1,45.4,107.3,86.8l6,14.7c1.1,2.4,1.8,5,2.6,7.5l2.3,7.6    c1.8,5,2.6,10.2,3.7,15.3l1.6,7.7c0.4,2.5,0.5,5,0.8,7.5l0.8,7.4c0.1,1.3,0.3,2.4,0.4,3.8l0.1,4.3l0.1,8.6l0.1,4.3v2.1v0.5v0.3    v0.1c0,0.2,0-1.6,0-0.8l-0.1,1l-1.3,15.6c-0.5,5.2-1.8,10.3-2.6,15.4c-8.3,40.6-29.6,78.7-61.3,105.6    c-15.7,13.6-33.6,24.5-52.9,32.2c-4.9,1.7-9.7,3.8-14.7,5.2l-15.1,3.9l-14.6,2.3c-2.2,0.5-5.2,0.6-8.1,0.8l-8.6,0.5l-4.3,0.2    l-1.7,0.1h-0.4h-1l-7.8-0.2c-5.2-0.4-10.4-0.7-15.5-1.5c-10.3-1.4-20.4-3.7-30.3-6.9c-19.8-6.3-38.3-16.3-54.6-28.9    c-2.9-2.3-7.1-4.6-10.9-6.4c-3.8-1.6-8.1-3.9-10.3-4.3c-4.6-1-5.7,1-4.5,5c0.6,1.9,1.7,4.4,3.3,7.1c1.6,2.6,3.6,5.5,6.1,8.5    c16.3,20,40.6,38,70.1,48.8c14.7,5.4,30.6,9.1,47.1,10.4l6.2,0.4l1.5,0.1l0.8,0.1h0.4h0.2h0.8h2.9c3.9-0.1,7.8-0.1,11.8-0.2    l5.9-0.1l6.4-0.8l12.9-1.7c40.2-7.1,78.4-25.4,108.8-53.2C432.182,393.241,445.882,377.541,456.382,359.741z" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}