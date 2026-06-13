"use client";
import { useEffect } from "react";

export default function RedirectJklotingWebsite() {
  useEffect(() => {
    window.location.replace("/projects/jkloting-website/");
  }, []);
  return null;
}
