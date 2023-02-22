import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full text-xl font-semibold">
      <div className="justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                width="70px"
                className="cursor-pointer "
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-between space-y-8 md:flex md:space-x-20 md:space-y-0">
              <li
                className="cursor-pointer hover:font-bold"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:font-bold focus:text-blue-500">
                <Link to="/resources">Resources</Link>
              </li>
              <li className="cursor-pointer hover:font-bold focus:text-blue-500">
                <Link to="/qna">Q&amp;A</Link>
              </li>
              <li className="cursor-pointer hover:font-bold focus:text-blue-500">
                <Link to="/about">About</Link>
              </li>
              <li className="cursor-pointer hover:font-bold">
                <Link to="/career">Career</Link>
              </li>

              <li className="cursor-pointer hover:font-bold">
                <Link to="/special-feat">Special Features</Link>
              </li>
              <li className="cursor-pointer hover:font-bold">
                <Link to="/experts">Experts</Link>
                <span className="bg-gray-400 text-white absolute top-10 text-sm p-1 rounded-lg">
                  We are Hiring !
                </span>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <Link to="/login">
                <div className="inline-block w-full px-4 py-2 text-center bg-white rounded-xl shadow-xl shadow-blue-400/30 hover:bg-sky-100 hover:font-bold hover:shadow-none">
                  Log In
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <Link to="/login">
            <div className="border-2 ml-12 absolute top-9 right-6 border-sky-500 px-12 py-2 bg-white rounded-xl shadow-xl shadow-blue-400/30 hover:bg-blue-500 hover:text-white hover:font-bold hover:shadow-slate-400 hover:border-none">
              Log In
            </div>
          </Link>
        </div>
      </div>
      <div id="myTabContent">
        <div
          class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </nav>
  );
}
