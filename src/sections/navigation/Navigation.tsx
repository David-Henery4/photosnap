"use client";
import { Navbar, Sidebar } from "@/components";
import { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isScreenTabletAndAbove = useMediaQuery("(min-width:48em)");
  //
  useEffect(() => {
    if (isScreenTabletAndAbove) setIsSidebarOpen(false);
  }, [isScreenTabletAndAbove]);
  //
  useEffect(() => {
    isSidebarOpen
      ? (document.documentElement.style.overflowY = "hidden")
      : (document.documentElement.style.overflowY = "auto");
  }, [isSidebarOpen]);
  //
  return (
    <>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default Navigation;
