import data from "../services/data";
import { useState } from "react";
const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState("weekly");
  console.log(timeFrame);
  return (
    <div className="grid gap-5 py-4 px-4 sm:grid-cols-1 lg:grid-cols-4">
      <div className="grid rounded-lg border-0 border-transparent bg-darkBlue sm:grid-cols-1 lg:col-start-1 lg:row-span-2">
        <div className="grid items-start justify-center rounded-lg border border-transparent bg-blue px-5 sm:auto-rows-fr sm:grid-cols-3 lg:grid-cols-1">
          <div className="sm:row-span-2 sm:p-5 lg:col-start-1 lg:row-span-1 lg:justify-self-start lg:p-0 lg:pt-5">
            <img
              src={require("../assets/images/image-jeremy.png")}
              alt="jerem"
              className="h-20 w-20 rounded-full border-2 border-white"
            />
          </div>
          <div className="sm:col-start-2 sm:row-start-1 sm:self-center sm:justify-self-start lg:col-start-1 lg:row-start-2">
            <p className="sm:text-md text-white opacity-70">Report for</p>
          </div>
          <div className="sm:col-span-2 sm:col-start-2 sm:row-start-2 sm:justify-self-start lg:col-start-1 lg:row-start-3">
            <p className="text-white sm:text-xl ">Jeremy Robson</p>
          </div>
        </div>
        <div className="grid rounded-lg border border-transparent bg-darkBlue p-5 font-rubik text-white sm:grid-cols-3 lg:grid-cols-1">
          <button
            className="opacity-70 hover:opacity-100 focus:opacity-100 lg:justify-self-start"
            onClick={() => setTimeFrame("daily")}
          >
            Daily
          </button>
          <button
            className="opacity-70 hover:opacity-100 focus:opacity-100 lg:justify-self-start"
            onClick={() => setTimeFrame("weekly")}
          >
            Weekly
          </button>
          <button
            onClick={() => setTimeFrame("monthly")}
            className="opacity-70 hover:opacity-100 focus:opacity-100 lg:justify-self-start"
          >
            Monthly
          </button>
        </div>
      </div>
      {data.map((element, index) => {
        const { title, background, svg } = element;
        return (
          <div
            className="relative grid grid-cols-1 rounded-lg border-0"
            key={index}
            style={{ background: background }}
          >
            <div
              className="flex justify-end overflow-hidden rounded-lg border-0 border-transparent py-0 px-2"
              style={{ background: background }}
            >
              <img
                src={svg}
                alt={title}
                className="-translate-y-4 -translate-x-2 transform"
              />
            </div>

            <div className="grid items-center gap-3 rounded-lg border border-transparent bg-darkBlue p-5 text-white sm:grid-cols-2">
              <div className="sm:col-start-1 sm:justify-self-start">
                <p className="sm:text-md font-bold">{title}</p>
              </div>
              <div className="sm:col-start-1 sm:row-start-2 sm:justify-self-start">
                <p className="font-normal opacity-90 sm:text-3xl ">
                  {element.timeframes[timeFrame].current} Hrs
                </p>
              </div>
              <div className="sm:col-start-2 sm:row-start-1 sm:justify-self-end">
                <p className="sm:text-md font-medium opacity-70">. . . </p>
              </div>
              <div className="sm:col-start-2 sm:row-start-2 sm:justify-self-end lg:col-span-full lg:col-start-1 lg:row-start-3 lg:self-start lg:justify-self-start">
                <p className="sm:text-md font-normal opacity-70 ">
                  Last Week - {element.timeframes[timeFrame].previous} hrs
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
