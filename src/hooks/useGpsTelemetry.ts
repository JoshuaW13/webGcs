// src/hooks/useGpsTelemetry.ts
import { useEffect } from 'react';
import { Drone } from '../models/Drone';
import { GpsTelemetry } from '../models/GpsTelemetry';

const SOCKET_SERVER_ENDPOINT = 'ws://127.0.0.1:8088/v1/ws/mavlink?filter=GPS_RAW_INT';

export const useGpsTelemetry = (setDrone: React.Dispatch<React.SetStateAction<Drone>>) => {
    useEffect(() => {
        const socket = new WebSocket(SOCKET_SERVER_ENDPOINT);

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const newGpsTelemetry = new GpsTelemetry(data.message.alt, data.message.lat, data.message.lon);
            setDrone((prevDrone) => prevDrone.clone().updateTelemetry(newGpsTelemetry));
        };

        return () => {
            socket.close();
        };
    }, [setDrone]);
};
