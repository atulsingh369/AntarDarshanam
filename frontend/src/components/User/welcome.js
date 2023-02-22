import * as React from "react";
import { Link } from "react-router-dom";

export default function login() {
  return (
    <>
      <h1 className="text-5xl font-semibold ">Welcome :)</h1>
      <div className="my-8 text-slate-500 text-3xl">
        <p>By creating your account you agree to our</p>
        <p>
          <span className="text-blue-500 cursor-pointer">
            <Link to="/terms-condition"> Terms and Conditions </Link>
          </span>
          and
          <span className="text-blue-500 cursor-pointer">
            <Link to="/data-protection"> Data Protection</Link>
          </span>
        </p>
        <Link to="/data-protection">
          <p className="text-blue-500 cursor-pointer"> Guidelines.</p>
        </Link>
      </div>
    </>
  );
}
