import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ImageIcon from "@mui/icons-material/Image";

import { useState } from "react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="flex justify-around">
        <div
          className="border-2 py-5 ml-48 border-black w-3/12 m-24 rounded-lg overflow-hidden relative"
          style={{
            "box-shadow":
              "-12px -12px 12px rgba(15, 209, 252, 0.75), 12px 12px 12px rgba(5, 209, 252, 0.25)",
          }}
        >
          <div className="flex items-center">
            <div className="">
              <AccountCircleIcon
                className="mx-3 ml-6 text-red-900"
                style={{ "font-size": "50px" }}
              />
            </div>
            <div>
              <div className="text-xl font-bold">Ask a Question</div>
              <div className="text-sm text-gray-600">
                Get help from the best Psychatrists
              </div>
            </div>
          </div>

          <form>
            <label>
              <div className="text-lg m-8 text-gray-600">Title*</div>
              <input
                type="text"
                name="title"
                className="rounded-lg mx-8 -mt-4 p-3 focus:outline-0 text-xl font-semibold border-2 focus:border-blue-500  w-80 overflow-hidden relative"
                style={{
                  "box-shadow":
                    "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  "background-color": "#EEEEEE;",
                }}
              />
            </label>
            <label>
              <div className="text-lg m-8 text-gray-600">
                What do you want to ask or share?? *
              </div>

              <textarea
                className="rounded-lg mx-8 h-1/2 -mt-4 p-6 focus:outline-0 text-xl font-semibold border-2 focus:border-blue-500 h-12 w-80 "
                style={{
                  "box-shadow":
                    "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  "background-color": "#EEEEEE;",
                }}
                rows={4}
              />
            </label>
            <div className="flex justify-around items-center">
              <label class="inline-flex relative items-center m-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={enabled}
                  readOnly
                />
                <div
                  onClick={() => {
                    setEnabled(!enabled);
                  }}
                  className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 0 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500 border-2 border-blue-500"
                ></div>
                <span className=" text-sm font-medium text-gray-900"></span>
              </label>
              <div className="text-xl -mt-1">Post Anonymously</div>
              <div>
                <ImageIcon
                  className="text-blue-500"
                  style={{ "font-size": "35px" }}
                />
              </div>
            </div>
            <input
              type="submit"
              value="Post"
              className="cursor-pointer rounded-lg mt-6 ml-8 bg-blue-500 p-2 text-2xl text-white px-8"
            />
          </form>
        </div>
              </div>
    </>
  );
}
