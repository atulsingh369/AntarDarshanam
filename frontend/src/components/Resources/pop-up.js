import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";

function close() {
  const a = document.getElementById("cls");
  a.style.display = "none";
}

window.onresize = clear();

function clear() {
  var w = window.innerWidth;

  if (w < 600) {
    close();
  }
}

export default function resource() {
  return (
    <div className="bg-gray-800">
      <div
        className="absolute h-3/5 border-2 border-black w-2/4 bg-white border-2 rounded-xl"
        id="cls"
        style={{ top: "20%", left: "25%" }}
      >
        <div>
          <CloseIcon
            onClick={(event) => close()}
            className="absolute right-6 top-6 cursor-pointer"
            style={{ "font-size": "35px" }}
          />
        </div>
        <form>
          <label>
            <div className="text-3xl m-8 font-bold">Enter Your Age</div>
            <input
              type="number"
              name="age"
              placeholder="--Enter--"
              className="rounded-xl ml-48 p-6 focus:outline-0 text-2xl font-semibold border-2 border-blue-500 h-12 w-96 overflow-hidden relative"
              style={{
                "box-shadow":
                  "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                "background-color": "#EEEEEE;",
              }}
            />
          </label>
          <div className="text-3xl m-8 font-bold">Enter Your Gender</div>
          <select
            placeholder="--Select--"
            className="rounded-xl ml-48 px-6 py-3 focus:outline-0 text-2xl font-semibold border-2 border-blue-500 w-96"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="trans">Transgender</option>
          </select>
          <div
            onClick={(event) => close()}
            className="mt-16 bg-blue-100 text-center cursor-pointer rounded-xl ml-72 hover:bg-gray-200 p-1 focus:outline-0 text-2xl font-semibold border-2 border-blue-500 h-12 w-48 overflow-hidden relative"
            style={{
              "box-shadow":
                "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
              "background-color": "#EEEEEE;",
            }}
          >
            Submit
          </div>
        </form>
      </div>
    </div>
  );
}
