import { FaInstalod } from "react-icons/fa";
import { BiLoader } from "react-icons/bi";
import smartcity from "./smart-city.png";
import empty from "./empty.png";

export const Loading1 = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen text-6xl text-red-600">
      <div className=" animate-spin">
        <FaInstalod />
      </div>
      <div className="text-3xl font-black text-black">Searching For City</div>
    </div>
  );
};

export const Loading2 = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-xl text-black">
      <div className="animate-spin">
        <BiLoader />
      </div>
      <div className="text-lg font-bold text-black">Searching For City</div>
    </div>
  );
};

export const NoData1 = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-xl text-black animate-bounce-short duration-75">
      <div className="w-20 aspect-square">
        <img src={smartcity} />
      </div>
      <div className="text-lg font-bold text-black">Search a city</div>
    </div>
  );
};

export const NoData2 = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-xl text-black animate-bounce-short duration-75">
      <div className="w-20 aspect-square">
        <img src={empty} />
      </div>
      <div className="text-lg font-bold text-black">No Data Found</div>
    </div>
  );
};
