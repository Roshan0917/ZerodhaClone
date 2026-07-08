// import "../dashboard.css";
import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

useEffect(() => {
  console.log("CURRENT URL =", window.location.href);

  const params = new URLSearchParams(window.location.search);

  console.log("TOKEN =", params.get("token"));
  console.log("USER =", params.get("user"));

  const token = params.get("token");
  const user = params.get("user");

  if (token) {
    localStorage.setItem("token", token);
  }

  if (user) {
    localStorage.setItem("user", decodeURIComponent(user));
  }

  console.log("Saved Token =", localStorage.getItem("token"));
  console.log("Saved User =", localStorage.getItem("user"));

  // URL se token aur user hata do
  window.history.replaceState({}, "", "/");

}, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;