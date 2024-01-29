import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import DashboardBanner from "./components/DashboardBanner";
import List from "./components/List";
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <HomeBanner />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <React.Fragment>
                <Header />
                <Login />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <React.Fragment>
                <Header />
                <SignUp />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <React.Fragment>
                {/* <Header/> */}
                <DashboardBanner />
                <List title="Netflix Originals" param="originals" />
                <List title="Trending Now" param="trending" />
                <List title="Now Playing" param="now_playing" />
                <List title="popular" param="popular" />
                <List title="Top Rated" param="top_rated" />
                <List title="Upcoming" param="upcoming" />
              </React.Fragment>
            }
          ></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
