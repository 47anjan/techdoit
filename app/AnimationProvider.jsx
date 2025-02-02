"use client";
import { useEffect } from "react";
import AOS from "aos";
const AnimationProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    }); // Initialize AOS library
  }, []);

  return <div>{children}</div>;
};
export default AnimationProvider;
