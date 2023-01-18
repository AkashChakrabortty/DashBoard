import { faBagShopping, faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
const LeftDashHeader = () => {
    return (
      <div>
        <div className="header flex gap-2 justify-evenly">
          <div className="revenue w-3/12 border p-2 rounded">
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
                  <span className="bg-lime-200 text-lime-600 rounded">
                    +2.65%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="orders w-3/12 border p-2 rounded">
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
                  <span className="bg-red-200 text-red-600 rounded">
                    -0.82%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="customers w-3/12 border p-2 rounded">
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
                  <span className="bg-red-200 text-red-600 rounded">
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