import React from "react";
import Devices from "../../resources/devices.svg?component=true";
import "./index.css";

const DevicesSection = () => {

    return <div className="devices-section d-flex flex-column justify-content-center align-items-start w-100">
        <Devices viewBox={[0, 0, 897, 452]} />
    </div>
}

export default DevicesSection;