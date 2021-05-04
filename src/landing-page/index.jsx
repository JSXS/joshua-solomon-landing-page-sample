import React from "react";
import { Provider } from "react-redux";
import store from "../redux";
import DevicesSection from "./devices-section";
import FormSection from "./form-section";
import "./index.css";

const LandingPage = () => <Provider store={store}>
    <FormSection />
    <DevicesSection />
</Provider>;

export default LandingPage;