import React, { useState, useEffect } from 'react'

import {useDrone} from '../hooks/useDrone.ts';

function GpsInfo() {

    const { drone } = useDrone();

    return (
        <div>
            <h2>Drone Status</h2>
            <p>Altitude: {drone.gpsTelemetry.altitude} </p>
            <p>Latitude: {drone.gpsTelemetry.latitude} </p>
            <p>Longitude: {drone.gpsTelemetry.longitude}</p>
        </div>
    );

}

export default GpsInfo