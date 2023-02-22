import * as React from "react";
import about from "../../assets/about1.png";
import signup from "../../assets/signup-hero.png";
import { Link } from "react-router-dom";

export default function CardComponent() {
  return (
    <>
      <div className="p-10 mt-28 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/*Card 1*/}
        <div
          className="rounded overflow-hidden relative"
          style={{
            "box-shadow":
              "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
          }}
        >
          <img
            className="w-full object-cover blur-xl"
            src={about}
            alt="pic-1"
          />
          <img
            className="w-4/6 absolute md:left-20 md:top-20 left-10 top-8"
            src={about}
            alt="pic-1"
          />
        </div>
        {/*Card 2*/}

        <div className="px-6 py-4">
          <div className="font-bold text-lg text-blue-500 text-center">
            AntarDarshanam
          </div>
          <div className="text-4xl mt-8 font-bold text-center">
            <p>
              <span className="text-blue-500">Connect</span> with{" "}
              <span className="text-blue-500"> Yourself </span>
            </p>
            <p>and a community of</p>
            <p>verified</p>
            <p>
              <span className="text-blue-500">Psychologists</span>
            </p>
          </div>
          <div className="flex justify-evenly items-center mt-12">
            <Link to="/resources">
              <button className="bg-blue-500 hover:bg-sky-600 shd-do text-white p-3 text-2xl rounded-xl font-semibold hover:">
                Resources
              </button>
            </Link>
            <Link to="/qna">
              <button className="bg-white shd-do shadow-xl text-blue-500 p-3 text-2xl rounded-xl font-semibold">
                Q&amp;A
              </button>
            </Link>
          </div>
        </div>

        {/*Card 3*/}
        <div
          className="rounded overflow-hidden relative"
          style={{
            "box-shadow":
              "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
          }}
        >
          <img
            className="w-full object-cover blur-xl"
            src={signup}
            alt="pic-2"
          />
          <img
            className="w-4/6 absolute md:left-20 md:top-20 left-10 top-8"
            src={signup}
            alt="pic-2"
          />
        </div>
      </div>
    </>
  );
}
