import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Welcome from "./welcome";
import signup from "../../assets/signup-hero.png";

function hide(value) {
  const el1 = document.getElementById("pat");
  const el2 = document.getElementById("doc");
  const el3 = document.getElementById("inst");
  if (value === "patient") {
    el1.classList.remove("hidden");
    if (!el2.classList.contains("hidden")) {
      el2.classList.add("hidden");
    }
    if (!el3.classList.contains("hidden")) {
      el3.classList.add("hidden");
    }
  } else if (value === "doctor") {
    el2.classList.remove("hidden");
    if (!el1.classList.contains("hidden")) {
      el1.classList.add("hidden");
    }
    if (!el3.classList.contains("hidden")) {
      el3.classList.add("hidden");
    }
  } else if (value === "institute") {
    el3.classList.remove("hidden");
    if (!el2.classList.contains("hidden")) {
      el2.classList.add("hidden");
    }
    if (!el1.classList.contains("hidden")) {
      el1.classList.add("hidden");
    }
  } else if (value === "") {
    if (!el1.classList.contains("hidden")) {
      el1.classList.add("hidden");
    }
    if (!el2.classList.contains("hidden")) {
      el2.classList.add("hidden");
    }
    if (!el3.classList.contains("hidden")) {
      el3.classList.add("hidden");
    }
  }
}
export default function Sign() {
  const [user, setUser] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    contact: 0,
  });

  const { f_name, l_name, email, password, contact } = user;

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("f_name", f_name);
    myForm.set("l_name", l_name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("contact", contact);
  };

  return (
    <>
      <div className="flex mx-32 justify-around my-16 mb-36 items-center">
        <div>
          <Welcome />
          <form
            className="flex flex-col"
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="flex justify-between">
              <label>
                <p className="text-slate-500 text-lg my-5">First Name *</p>
                <input
                  className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                  autoFocus
                  type="text"
                  style={{
                    "box-shadow":
                      "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  }}
                  name="f_name"
                  required
                />
              </label>
              <label>
                <p className="text-slate-500 text-lg my-5">Last Name *</p>
                <input
                  className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                  type="text"
                  style={{
                    "box-shadow":
                      "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  }}
                  name="l_name"
                  required
                />
              </label>
            </div>
            <label>
              <p className="text-slate-500 text-lg my-5">
                Your Email Address *
              </p>
              <input
                className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                type="email"
                style={{
                  "box-shadow":
                    "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                }}
                name="email"
                required
              />
            </label>
            <label>
              <p className="text-slate-500 text-lg my-5">Enter Password *</p>
              <input
                className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                type="password"
                style={{
                  "box-shadow":
                    "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                }}
                name="email"
                required
              />
            </label>
            <label>
              <p className="text-slate-500 text-lg my-5">Confirm Password *</p>
              <input
                className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                type="password"
                style={{
                  "box-shadow":
                    "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                }}
                name="email"
                required
              />
            </label>
            <label>
              <p className="text-slate-500 text-lg my-5">Contact No *</p>
              <input
                className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                type="number"
                style={{
                  "box-shadow":
                    "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                }}
                name="contact"
                required
              />
            </label>
            <label>
              <p className="text-slate-500 text-lg my-5">Profile Type *</p>
              <select
                onChange={(e) => hide(e.target.value)}
                placeholder="--Select--"
                className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
              >
                <option value=""></option>
                <option value="patient">User</option>
                <option value="doctor">Pshycatrist</option>
                <option value="institute">Institute</option>
              </select>
            </label>

            {/* Patient */}

            <div className="hidden" id="pat">
              <label>
                <p className="text-slate-500 text-lg my-5">Date of Birth *</p>
                <input
                  className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                  type="date"
                  style={{
                    "box-shadow":
                      "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  }}
                  name="date"
                  required
                />
              </label>
              <label>
                <p className="text-slate-500 text-lg my-5">Institute *</p>
                <input
                  className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                  type="text"
                  style={{
                    "box-shadow":
                      "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  }}
                  name="institute"
                  required
                />
              </label>
              <label>
                <p className="text-slate-500 text-lg my-5">Standard *</p>
                <input
                  className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                  type="text"
                  style={{
                    "box-shadow":
                      "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  }}
                  name="standard"
                  required
                />
              </label>
            </div>

            {/* Doctor */}

            <div className="hidden" id="doc">
              <label>
                <p className="text-slate-500 text-lg my-5">License No *</p>
                <input
                  className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                  type="text"
                  style={{
                    "box-shadow":
                      "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  }}
                  name="license"
                  required
                />
              </label>
              <label>
                <p className="text-slate-500 text-lg my-5">Address Line 01 *</p>
                <input
                  className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                  type="text"
                  style={{
                    "box-shadow":
                      "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  }}
                  name="add1"
                  required
                />
              </label>
              <label>
                <p className="text-slate-500 text-lg my-5">Address Line 02 *</p>
                <input
                  className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                  type="text"
                  style={{
                    "box-shadow":
                      "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  }}
                  name="add2"
                  required
                />
              </label>
              <label>
                <p className="text-slate-500 text-lg my-5">Zip Code *</p>
                <input
                  className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                  type="text"
                  style={{
                    "box-shadow":
                      "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  }}
                  name="zip"
                  required
                />
              </label>
            </div>

            {/* Institute */}

            <div className="hidden" id="inst">
              <label>
                <p className="text-slate-500 text-lg my-5">AICTE Code *</p>
                <input
                  className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                  type="text"
                  style={{
                    "box-shadow":
                      "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  }}
                  name="aicte"
                  required
                />
              </label>
              <label>
                <p className="text-slate-500 text-lg my-5">Address Line 01 *</p>
                <input
                  className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                  type="text"
                  style={{
                    "box-shadow":
                      "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  }}
                  name="add1"
                  required
                />
              </label>
              <label>
                <p className="text-slate-500 text-lg my-5">Address Line 02 *</p>
                <input
                  className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                  type="text"
                  style={{
                    "box-shadow":
                      "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  }}
                  name="add2"
                  required
                />
              </label>
              <label>
                <p className="text-slate-500 text-lg my-5">Zip Code *</p>
                <input
                  className="border-2 px-5 focus:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 focus:shadow-none hover:border-blue-500"
                  type="text"
                  style={{
                    "box-shadow":
                      "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                  }}
                  name="zip"
                  required
                />
              </label>
            </div>

            <input
              type="submit"
              value="Signup"
              className="mt-16 hover:bg-sky-600 cursor-pointer mb-2 bg-blue-500 w-4/5 text-white p-2 font-semibold text-2xl rounded-xl"
            />
            <p className="text-slate-500 font-bold text-xl">
              Already have an account?
              <Link to="/login">
                <span className="text-blue-500 cursor-pointer"> Log In</span>
              </Link>
            </p>
          </form>
        </div>
        <div className="flex flex-col">
          <div className="rounded overflow-hidden relative">
            <img className="w-full object-cover" src={signup} alt="pic-2" />
          </div>
          <p className="text-center text-slate-500 font-medium text-xl">
            Connect with world-class psychologists and councellors.
          </p>
        </div>
      </div>
    </>
  );
}
