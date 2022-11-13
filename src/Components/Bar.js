import React from "react";

//Importing Chart Component and the Json Data
import Chart from "./Chart";
import Data from "./Data/Wine-Data.json";


const Bar = () => {
  return (
    <div>
      {
        Data.map((data) => (
          <Chart data={data}  />
        ))
     }
    </div>
  );
};

export default Bar;
