import FlightForm from "../components/FlightForm";

import { Checkbox, Slider } from "antd";
import type { SliderMarks } from "antd/es/slider";
import menu from "/public/menu.svg";


const marks: SliderMarks = {
  0: {
    style: {
      color: "#0f766e",
    },
    label: <strong>$50</strong>,
  },
  26: "$300",
  48: "$600",

  100: {
    style: {
      color: "#0f766e",
    },
    label: <strong>$1200</strong>,
  },
};

const page = ({ searchParams }: any) => {
  return (
    <div>
      <FlightForm data={searchParams} />
      {/* <FlightsDetails /> */}
      <div>
        <div className="flex ml-[104px] mt-[40px]">
          {/* left side */}
          <div>
            <p className="font-semibold text-lg mb-[32px]">Filters</p>
            <p className="font-semibold mb-[16px]">Price</p>
            <div className="mb-[64px]">
              <Slider
                marks={marks}
                style={{ width: 200 }}
                range={{ draggableTrack: true }}
                defaultValue={[0, 100]}
                // trackStyle={{ backgroundColor: '#91d5ff' }}
                // handleStyle={{ borderColor: '#91d5ff'}}
              />
            </div>

            <p className="font-semibold mb-[16px]">Departure Time</p>
            <div className="mb-[64px]">
              <Slider
                marks={marks}
                style={{ width: 200 }}
                range={{ draggableTrack: true }}
                defaultValue={[0, 100]}
                // trackStyle={{ backgroundColor: '#91d5ff' }}
                // handleStyle={{ borderColor: '#91d5ff'}}
              />
            </div>

            <p className="font-semibold mb-[16px] mt-[64px]">Rating</p>
            <div className="flex gap-x-3">
              <button className="py-[8px] px-[8px] rounded-md border border-mint-green ">
                0+
              </button>
              <button className="py-[8px] px-[8px] rounded-md border border-mint-green ">
                1+
              </button>
              <button className="py-[8px] px-[8px] rounded-md border border-mint-green ">
                2+
              </button>
              <button className="py-[8px] px-[8px] rounded-md border border-mint-green ">
                3+
              </button>
              <button className="py-[8px] px-[8px] rounded-md border border-mint-green ">
                4+
              </button>
            </div>

            <p className="font-semibold mb-[16px] mt-[64px]">Airlines</p>
            <div className="flex flex-col">
              <Checkbox>Emirates</Checkbox>
              <Checkbox>FlyDubai</Checkbox>
              <Checkbox>Qatar</Checkbox>
              <Checkbox>Eitihad</Checkbox>
            </div>
          </div>

          {/* right side */}
          <div className="ml-[16px]">
            {/* header */}
            <div className="max-w-[840px] flex md:gap-x-[15px] shadow-sm shadow-gray-500 rounded-md mx-auto">
              <button className="shadow-sm shadow-gray-50 py-4 px-[60px]  border-[3px]  ">
                <p className="font-semibold flex-1">Cheapest</p>
              </button>
              <button className="shadow-sm shadow-gray-50 py-4 px-[60px]  border-[3px] border-b-mint-green">
                <p className="font-semibold flex-1">Best</p>
              </button>
              <button className="shadow-sm shadow-gray-50 py-4 px-[60px]  border-[3px] ">
                <p className="font-semibold flex-1">Quickest</p>
              </button>
              <button className="flex flex-1 shadow-sm shadow-gray-50 py-4 px-[60px]  border-[3px] ">
                <img src={menu} alt="side menu icon" />
                <p className="font-semibold ml-[4px]">Other sort</p>
              </button>
            </div>
            <p className="text-[14px] mt-[24px] ">
              <span className="font-bold"> Showing 4 of </span>
              <span className="text-red-400 "> 257 places</span>
            </p>
            {/* body */}
            <div>
              <div className="max-w-[840px] flex">
                <div className="w-[160px] ml-[16px] mt-[24px] ">

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
