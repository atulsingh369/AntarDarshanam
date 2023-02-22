import React, { Fragment, useEffect } from "react";
import Sound from "react-sound";
import bineural from "./assets/bineural.mp3";
import WebFont from "webfontloader";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";
import Resource from "./components/Resources/resources";
import QnA from "./components/QnA/qna";
import About from "./components/About/about";
import Career from "./components/Career/career";
import Experts from "./components/Experts/expert";
import Navbar from "./components/Layout/navbar";
import Footer from "./components/Layout/footer";
import Blogs from "./components/Layout/blogs";
import Feat from "./components/Special/feat";
import Login from "./components/User/LoginSignUp";
import Signup from "./components/User/Signup";
import TnC from "./components/User/TnC";
import Data from "./components/User/data";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <Sound
        url={bineural}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/resources">
          <Resource />
        </Route>
        <Route exact path="/qna">
          <QnA />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/career">
          <Career />
        </Route>
        <Route exact path="/experts">
          <Experts />
        </Route>
        <Route exact path="/blogs">
          <Blogs />
        </Route>
        <Route exact path="/special-feat">
          <Feat />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/terms-condition">
          <TnC />
        </Route>
        <Route exact path="/data-protection">
          <Data />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
