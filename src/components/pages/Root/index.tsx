import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../modules/header";
import { Footer } from "../../modules/footer";

const Root = () => {
  useEffect(() => {
    localStorage.theme === "dark"
      ? document.querySelector("html")?.classList.add("dark")
      : document.querySelector("html")?.classList.remove("dark");
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-zinc-800 dark:text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
