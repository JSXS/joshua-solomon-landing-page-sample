import React from "react";
import { render } from "react-dom";
import LandingPage from "./landing-page";

export const appContainerId = "app-container";

render(<LandingPage />, document.getElementById(appContainerId));