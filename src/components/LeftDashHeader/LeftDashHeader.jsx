import { faBagShopping, faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
const LeftDashHeader = () => {
    return (
      <div>
        <div className="header lg:flex gap-2 justify-evenly">
          <div className="revenue w-full md:w-1/2 lg:w-3/12 mx-auto p-2 rounded default-bg">
            <div className="text-container flex items-center">
              <div className="left w-3/12 bg-lime-600 rounded p-2 h-fit flex justify-center items-center">
                <FontAwesomeIcon icon={faDollar} />
              </div>
              <div className="right w-full flex justify-between m-2">
                <div className="left">
                  <p>
                    <span>Revenue</span> <br />
                    <h6 className="font-bold">$21,456</h6>
                  </p>
                </div>
                <div className="right flex items-end">
                  <span className="bg-green-600 text-green-900 rounded">
                    +2.65%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="orders w-full md:w-1/2 lg:w-3/12 my-2 mx-auto default-bg p-2 rounded">
            <div className="text-container flex items-center">
              <div className="left w-3/12 bg-lime-600 rounded p-2 h-fit flex justify-center items-center">
                <FontAwesomeIcon icon={faBagShopping} />
              </div>
              <div className="right w-full flex justify-between m-2">
                <div className="left">
                  <p>
                    <span>Orders</span> <br />
                    <h6 className="font-bold">5,643</h6>
                  </p>
                </div>
                <div className="right flex items-end">
                  <span className="bg-red-500 text-red-900 rounded">
                    -0.82%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="customers w-full md:w-1/2 lg:w-3/12 mx-auto default-bg p-2 rounded">
            <div className="text-container flex items-center">
              <div className="left w-3/12 bg-lime-600 rounded p-2 h-fit flex justify-center items-center">
                <FontAwesomeIcon icon={faDollar} />
              </div>
              <div className="right w-full flex justify-between m-2">
                <div className="left">
                  <p>
                    <span>Customers</span> <br />
                    <h6 className="font-bold">45,254</h6>
                  </p>
                </div>
                <div className="right flex items-end">
                  <span className="bg-red-500 text-red-900 rounded">
                    -1.04%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LeftDashHeader;