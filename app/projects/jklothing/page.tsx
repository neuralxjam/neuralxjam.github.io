"use client";
import { useEffect } from "react";

export default function RedirectJklotingDashboard() {
  useEffect(() => {
    window.location.replace("/projects/jkloting-dashboard/");
  }, []);
  return null;
}
