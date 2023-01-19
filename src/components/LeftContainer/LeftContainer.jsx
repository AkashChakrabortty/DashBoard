import { faAngleDown, faAngleUp, faBars, faCalendar, faComment, faDatabase, faDumpster, faElevator, faEnvelope, faFile, faHistory, faMagnifyingGlass, faPenSquare, faPersonCircleCheck, faTable, faWifi, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
const LeftContainer = () => {
    const [isDown, setIsDown] = useState(false);
    const [isX, setIsX] = useState(false);
    const handleIcon = () => {
      setIsX(!isX);
    }
       
    return (
      <div className={`default-bg default-font ${isX ? "w-1/5" : "w-12"}`}>
        <div className="icon flex justify-end p-4 text-2xl">
          <button onClick={handleIcon}>
            {isX ? (
              <>
                <FontAwesomeIcon icon={faX} />
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faBars} />
              </>
            )}
          </button>
        </div>
        <div className={`sideNav ${isX ? "block" : "hidden"} `}>
          <div className="menu p-2">
            <h6 className="uppercase">menu</h6>
            <li className="list-none flex">
              <div className="left w-4/5 flex gap-2 items-center">
                <FontAwesomeIcon icon={faTable} />
                <Link>Dashboards</Link>
              </div>
              <div className="right w-1/5 flex justify-end items-center">
                {isDown ? (
                  <button onClick={() => setIsDown(false)}>
                    <FontAwesomeIcon icon={faAngleUp} />
                  </button>
                ) : (
                  <button onClick={() => setIsDown(true)}>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                )}
              </div>
            </li>

            <li className={`list-none flex ${isDown ? "block" : "hidden"}`}>
              <div className="w-3/4 mx-auto">
                <Link className="block">Ecommerce</Link>
                <Link className="block">Sass</Link>
                <Link>Crypto</Link>
              </div>
            </li>
          </div>
          <hr className="w-4/5 mx-auto" />
          <div className="applications p-2">
            <h6 className="uppercase">applications</h6>
            <li className="list-none flex">
              <div className="left w-4/5 flex gap-2 items-center">
                <FontAwesomeIcon icon={faCalendar} />
                <Link>Calendar</Link>
              </div>
              <div className="right w-1/5 flex justify-end items-center">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </li>

            <li className="list-none flex">
              <div className="left w-4/5 flex gap-2 items-center">
                <FontAwesomeIcon icon={faComment} />
                <Link>Chat</Link>
              </div>
              <div className="right w-1/5 flex justify-end items-center text-red-600">
                Hot
              </div>
            </li>

            <li className="list-none flex">
              <div className="left w-full flex gap-2 items-center">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <Link>File Manager</Link>
              </div>
            </li>
            <li className="list-none flex">
              <div className="left w-4/5 flex gap-2 items-center">
                <FontAwesomeIcon icon={faDumpster} />
                <Link>Ecommerce</Link>
              </div>
              <div className="right w-1/5 flex justify-end items-center">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </li>
            <li className="list-none flex">
              <div className="left w-4/5 flex gap-2 items-center">
                <FontAwesomeIcon icon={faEnvelope} />
                <Link>Email</Link>
              </div>
              <div className="right w-1/5 flex justify-end items-center">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </li>
            <li className="list-none flex">
              <div className="left w-4/5 flex gap-2 items-center">
                <FontAwesomeIcon icon={faFile} />
                <Link>Invoices</Link>
              </div>
              <div className="right w-1/5 flex justify-end items-center">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </li>
            <li className="list-none flex">
              <div className="left w-4/5 flex gap-2 items-center">
                <FontAwesomeIcon icon={faHistory} />
                <Link>Projects</Link>
              </div>
              <div className="right w-1/5 flex justify-end items-center">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </li>

            <li className="list-none flex">
              <div className="left w-4/5 flex gap-2 items-center">
                <FontAwesomeIcon icon={faWifi} />
                <Link>Contacts</Link>
              </div>
              <div className="right w-1/5 flex justify-end items-center">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </li>
          </div>
          <hr className="w-4/5 mx-auto" />
          <span className="uppercase ml-2">layouts</span>
          <div className="pages p-2">
            <h6 className="uppercase">pages</h6>
            <li className="list-none flex">
              <div className="left w-4/5 flex gap-2 items-center">
                <FontAwesomeIcon icon={faPersonCircleCheck} />
                <Link>Authentication</Link>
              </div>
              <div className="right w-1/5 flex justify-end items-center">
                <div className="right w-1/5 flex justify-end items-center text-red-600">
                  8
                </div>
              </div>
            </li>

            <li className="list-none flex">
              <div className="left w-4/5 flex gap-2 items-center">
                <FontAwesomeIcon icon={faDatabase} />
                <Link>Utillity</Link>
              </div>
              <div className="right w-1/5 flex justify-end items-center">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </li>
          </div>
          <hr className="w-4/5 mx-auto" />
          <div className="components p-2">
            <h6 className="uppercase">components</h6>
            <li className="list-none flex">
              <div className="left w-4/5 flex gap-2 items-center">
                <FontAwesomeIcon icon={faElevator} />
                <Link>UI Elements</Link>
              </div>
              <div className="right w-1/5 flex justify-end items-center">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </li>

            <li className="list-none flex">
              <div className="left w-4/5 flex gap-2 items-center">
                <FontAwesomeIcon icon={faPenSquare} />
                <Link>Forms</Link>
              </div>
              <div className="right w-1/5 flex justify-end items-center">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </li>
          </div>
        </div>
      </div>
    );
};

export default LeftContainer;