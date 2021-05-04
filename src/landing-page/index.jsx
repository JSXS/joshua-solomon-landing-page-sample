import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux";
import DevicesSection from "./devices-section";
import FormSection from "./form-section";
import SuccessMessage from "./success";

const LandingPage = () => <Provider store={store}>
    <FormSection />
    <DevicesSection />
    <SuccessMessage />
</Provider>;

export default LandingPage;