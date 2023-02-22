import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Welcome from "./welcome";
import { useAlert } from "react-alert";
import signup from "../../assets/signup-hero.png";

export default function Login() {
  // const dispatch = useDispatch();
  // const alert = useAlert();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  function validateForm() {
    return loginEmail.length > 0 && loginPassword.length > 0;
  }
  const loginSubmit = (e) => {
    console.log("form submitted");
  };

  return (
    <>
      <div className="flex mx-32 justify-around my-16 mb-36 items-center">
        <div>
          <Welcome />
          <form onSubmit={loginSubmit} className="flex flex-col">
            <label>
              <p className="text-slate-500 text-lg my-5">
                Your Email Address *
              </p>
              <input
                className="border-2 px-5 active:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 active:shadow-none hover:border-blue-500"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                autoFocus
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
                className="border-2 px-5 active:outline-0 text-2xl p-3 font-semibold rounded-xl hover:drop-shadow-none w-4/5 active:shadow-none hover:border-blue-500"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                style={{
                  "box-shadow":
                    "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
                }}
                name="email"
                required
              />
            </label>
            <input
              type="submit"
              disabled={!validateForm()}
              value="Login"
              className="mt-16 hover:bg-sky-600 cursor-pointer mb-2 bg-blue-500 w-4/5 text-white p-2 font-semibold text-2xl rounded-xl"
            />
            <p className="text-slate-500 font-bold text-xl">
              Don't have an account?
              <Link to="/signup">
                <span className="text-blue-500 cursor-pointer"> Sign Up</span>
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
