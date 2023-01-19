import React from 'react';

const Overview = () => {
    return (
      <div className="w-2/5 border p-2">
        <h6>Overview</h6>
        <div className="w-full flex justify-between">
          <div className="my-2">
            <p>
              <span>This Month</span> <br />
              <p>
                <span className="font-bold">$24,568</span>
                <span className="bg-red-200 text-red-600 rounded ml-2">
                  +2.65%
                </span>
              </p>
            </p>
          </div>
        </div>
        <div className="grid-section p-2">
          <div className="row1 flex border-b-2  divide-x-2">
            <div className="left w-1/2">
              <span>Orders</span> <br />
              <span className="font-bold">5,643</span>
            </div>
            <div className="right  w-1/2">
              <span className="ml-2">Orders</span> <br />
              <span className="font-bold ml-2">5,643</span>
            </div>
          </div>
          <div className="row2 flex border-b-2  divide-x-2">
            <div className="left w-1/2">
              <span>Orders</span> <br />
              <span className="font-bold">5,643</span>
            </div>
            <div className="right  w-1/2">
              <span className="ml-2">Orders</span> <br />
              <span className="font-bold ml-2">5,643</span>
            </div>
          </div>
          <div className="row3 flex  divide-x-2">
            <div className="left w-1/2">
              <span>Orders</span> <br />
              <span className="font-bold">5,643</span>
            </div>
            <div className="right  w-1/2">
              <span className="ml-2">Orders</span> <br />
              <span className="font-bold ml-2">5,643</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Overview;