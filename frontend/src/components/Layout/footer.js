import * as React from "react";
import logo from "../../assets/logo.png";
import { BrowserRouter as Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Footer() {
  return (
    <footer className="p-4 bg-blue-500 sm:p-6">
      <div className="md:flex md:justify-between">
        <div className="text-white mb-6 md:mb-0">
          <Link to="/">
            <div className="flex justify-strat">
              <img
                src={logo}
                alt="logo"
                href="/"
                width="70px"
                className="rounded-2xl cursor-pointer bg-white mr-4"
              />
              <Link to="/">
                <span className="cursor-pointer self-center underline text-2xl font-semibold whitespace-nowrap ">
                  AntarDarshanam
                </span>
              </Link>
            </div>
          </Link>

          <div className="mt-4 text-white">
            <p>
              AntarDarshnam is a Psychology based organization. Apart from
              bridging the gap
            </p>
            <p>
              between the schools and councellors, we use latest technology to
              overcome various
            </p>
            <p>Psychological challenges faced by students.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div></div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Resources
            </h2>
            <ul className="text-white">
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  AntarDarshanam
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:underline">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Legal
            </h2>
            <ul className="text-white">
              <li className="mb-4">
                <a href="/data-protection" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-condition" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-white absolute cursor-pointer right-10">
        <LocalPhoneIcon /> Helpline No
      </div>
      <hr className="my-6 border-white sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-white sm:text-center">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Antar Darshan™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 items-center space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://www.facebook.com/"
            className="text-white hover:text-gray-900 dark:hover:text-white"
          >
            <FacebookIcon />
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-white hover:text-gray-900 dark:hover:text-white"
          >
            <InstagramIcon />
            <span className="sr-only">Instagram page</span>
          </a>
          <a
            href="https://twitter.com/"
            className="text-white hover:text-gray-900 dark:hover:text-white"
          >
            <TwitterIcon />
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="https://www.youtube.com/"
            className="text-white hover:text-gray-900 dark:hover:text-white"
          >
            <YouTubeIcon />
            <span className="sr-only">Youtube</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
