import React, { createContext, useState, ReactNode } from 'react';
import { Drone } from '../models/Drone';
import { useGpsTelemetry } from '../hooks/useGpsTelemetry';

export interface DroneContextType {
    drone: Drone;
}

export const DroneContext = createContext<DroneContextType | undefined>(undefined);

export const DroneProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [drone, setDrone] = useState<Drone>(new Drone('')); // Default values

    useGpsTelemetry(setDrone);

    return (
        <DroneContext.Provider value={{ drone }}>
            {children}
        </DroneContext.Provider>
    );
};
