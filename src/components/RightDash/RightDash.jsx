import { faEllipsis, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import img from '../../photo/avatar.png';
const RightDash = () => {
    return (
      <div className="w-1/3 border">
        <div className="profile">
          <div className="default-bg h-16 text-right">
            <FontAwesomeIcon icon={faEllipsis} className="mr-2" />
          </div>
          <div className="img w-1/2 mx-auto text-center -mt-7">
            <div className="w-1/2  mx-auto ">
              <img
                src={img}
                alt="Akash"
                className="w-16 flex justify-center"
                style={{
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
            </div>

            <h5>Akash Chakrabortty</h5>
            <p>Product Designer</p>
          </div>

          <div className="flex mt-2 divide-x-2">
            <div className="left w-1/2 text-center">
              1,269 <br /> Products
            </div>
            <div className="right w-1/2 text-center">
              5.2k <br /> Followers
            </div>
          </div>
        </div>
        <hr className="w-4/5 mx-auto mt-5" />
        <div className="earning m-1">
          <div className="header flex justify-between m-2">
            <div className="title">Earning</div>
            <div className="icon">
              <FontAwesomeIcon icon={faGear} />
            </div>
          </div>
          <div className="text-center">
            <progress value="76" max="100"></progress>
            76%
            <div className=" text-center">
              <h6>$26,256</h6>
              <p>Earning this Montth</p>
              <p>
                <span className="bg-green-600 text-green-900 rounded">
                  +2.6%
                </span>{" "}
                From previous period
              </p>
            </div>
          </div>
        </div>
        <hr className="w-4/5 mx-auto mt-5" />
        <div className="activity mt-3">
          <h6 className="m-2">Recent Activity</h6>
          <div className="flex gap-2 m-2">
            <div className="left rounded default-bg p-1">
              12 <br /> Sep
            </div>
            <div className="right">
              <p>Responded to need 'Volunteer Activities'</p>
            </div>
          </div>

          <div className="flex gap-2 m-2">
            <div className="left rounded default-bg p-1">
              11 <br /> Sep
            </div>
            <div className="right">
              <p>
                Everyone realizes would be desirable... <br />{" "}
                <span className="text-lime-600">Read more</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 m-2">
            <div className="left rounded default-bg p-1">
              10 <br /> Sep
            </div>
            <div className="right">
              <p>Joined the group 'Boardsmanship Forum'</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RightDash;