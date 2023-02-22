import * as React from "react";

export default function pop() {
  return (
    <>
      <div
        className="h-72 my-3 space-y-8 text-white flex flex-col items-center justify-center"
        style={{
          "background-image":
            "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        }}
      >
        <div className="font-bold underline text-4xl">
          Are you the hero this world needs?
        </div>
        <div className="text-2xl ">Develop | Improve | Spread Smile </div>
        <button className="text-blue-500 rounded-full p-3 px-8 font-bold text-3xl bg-white">
          Apply Now
        </button>
      </div>
      <div className="flex m-24 mx-36 justify-around">
        <div className="flex w-1/2 flex-col">
          <div className="text-4xl my-4 font-semibold">
            We are building India's No. 1 and the largest Deep tech Mental
            Health & Wellness platform.
          </div>
          <div className="font-medium my-4 text-xl text-gray-600">
            We're building an Anonymous, Safe, platform that smartly connects
            students to the right counsellors and completely solves all their
            problems on three levels.
          </div>
          <div className="flex">
            <div className="border-6 h-12 border-black"></div>
            <div className="text-2xl my-4 font-semibold ">
              Our aim is to reach every school and facilitate all the students
              with our facilities, eradicating the current gap between students
              and psychologists.
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
      <div
        className="h-72 my-3 space-y-8 text-white flex flex-col items-center justify-center"
        style={{
          "background-image":
            "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        }}
      >
        <div className="font-bold text-4xl underline">Join Us today</div>
        <button className="text-blue-500 rounded-full p-3 px-8 font-bold text-3xl bg-white">
          Apply Now
        </button>
        <div className="text-2xl ">
          can't find an open position of your interest? write to us at
          teamchronicles@gmail.com and if we like each other, we will find a
          role for you.
        </div>
      </div>
    </>
  );
}
