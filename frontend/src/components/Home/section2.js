import * as React from "react";
import { Link } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import PeopleIcon from "@mui/icons-material/People";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export default function Card() {
  return (
    <div className="md:mx-28 mx-6 mt-24">
      <h1 className="font-bold text-3xl">Steps to Follow</h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {/*Card 1*/}
        <Link to="/signup">
          <div className="rounded-xl overflow-hidden shd">
            <div className="flex justify-center h-36 items-center">
              <HowToRegIcon style={{ color: "#3b82f6", fontSize: "80px" }} />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-center text-lg mb-2">REGISTER</div>
              <p className="text-gray-700 text-base text-center">
                Setup your profile by clicking on Log In button in the top right
                corner.
              </p>
            </div>
          </div>
        </Link>
        {/*Card 2*/}
				<Link to="/resources">
        <div className="rounded-xl overflow-hidden shd">
          <div className="flex justify-center h-36 items-center">
            <LocalActivityIcon style={{ color: "#3b82f6", fontSize: "80px" }} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-center text-lg mb-2">RESOURCES</div>
            <p className="text-gray-700 text-base text-center">
              A collection of games, books and activities prescribed by verfied
              psychologists
            </p>
          </div>
        </div>
				</Link>
        {/*Card 3*/}
				<Link to="/qna">
        <div className="rounded-xl overflow-hidden shd">
          <div className="flex justify-center h-36 items-center">
            <PeopleIcon style={{ color: "#3b82f6", fontSize: "80px" }} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-center text-lg mb-2">COMMUNITY</div>
            <p className="text-gray-700 text-base text-center">
              Ask any question and get them answered by verified psychologists
            </p>
          </div>
        </div>
				</Link>
        {/*Card 4*/}
				<Link to="/special-feat">
        <div className="rounded-xl overflow-hidden shd">
          <div className="flex justify-center h-36 items-center">
            <EventAvailableIcon
              style={{ color: "#3b82f6", fontSize: "80px" }}
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-center text-lg mb-2">
              COUNSELLING
            </div>
            <p className="text-gray-700 text-base text-center">
              Get councelling from world-class counsellors.
            </p>
          </div>
        </div>
				</Link>
      </div>
    </div>
  );
}
