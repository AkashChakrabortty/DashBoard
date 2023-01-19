import { faAngleDown, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { PieChart } from "react-minimal-pie-chart";
import DoubleLineChart from "../DoubleLineChart/DoubleLineChart";
const LeftDashFooter = () => {
    return (
      <div className="flex gap-2 mt-5 w-full">
        <div className="left w-4/12 border rounded p-2">
          <div className="header flex justify-between">
            <div className="text">User Activity</div>
            <div className="icon">
              Weekly
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          <p>
            This Month <br /> <span className="font-bold">16,543</span>
          </p>
          <p className="text-right">Current Previous</p>
          <div className="w-full overflow-x">
            <DoubleLineChart></DoubleLineChart>
          </div>
        </div>

        <div className="middle w-4/12 border rounded p-2">
          <div className="header flex justify-between">
            <div className="text">Order Stats</div>
            <div className="icon">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          <div className="chart">
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
            />
            ;
          </div>
          <div className="flex justify-evenly">
            <div className="completed">Completed</div>
            <div className="pending">Pending</div>
            <div className="cancel">Cancel</div>
          </div>
        </div>

        <div className="right w-4/12 border rounded p-2">
          <div className="header flex justify-between">
            <div className="text">Top Product</div>
            <div className="icon">
              Monthly
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>

          <div className="polo w-full p-2 ">
            <div className="text-container flex items-center">
              <div className="left w-3/12 bg-lime-600 rounded p-2 h-fit flex justify-center items-center">
                #1
              </div>
              <div className="right w-full flex justify-between m-2">
                <div className="left">
                  <p>
                    <span>Polo blue T-shirt</span> <br />
                    <h6 className="font-bold">$25.4</h6>
                  </p>
                </div>
                <div className="right flex items-end">
                  <span className="bg-lime-200 text-lime-600 rounded">
                    3.82K
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="Hoodie w-full p-2 ">
            <div className="text-container flex items-center">
              <div className="left w-3/12 bg-lime-600 rounded p-2 h-fit flex justify-center items-center">
                #2
              </div>
              <div className="right w-full flex justify-between m-2">
                <div className="left">
                  <p>
                    <span>Hoodie for men</span> <br />
                    <h6 className="font-bold">$25.5</h6>
                  </p>
                </div>
                <div className="right flex items-end">
                  <span className="bg-lime-200 text-lime-600 rounded">
                    3.14K
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="cap w-full p-2 ">
            <div className="text-container flex items-center">
              <div className="left w-3/12 bg-lime-600 rounded p-2 h-fit flex justify-center items-center">
                #3
              </div>
              <div className="right w-full flex justify-between m-2">
                <div className="left">
                  <p>
                    <span>Red color Cap</span> <br />
                    <h6 className="font-bold">$22.5</h6>
                  </p>
                </div>
                <div className="right flex items-end">
                  <span className="bg-lime-200 text-lime-600 rounded">
                    2.84K
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LeftDashFooter;