import React, { useState, useEffect } from 'react'

import { io } from "socket.io-client"



const GPS_REST_ENDPOINT = 'http://localhost:8081/gps'

const GPS_REST_ENDPOINT_TWO = 'http://127.0.0.1:8088/v1/mavlink/vehicles/1/components/1/messages/GPS_RAW_INT'

const DEFAULT_POSITION_STATE = { "latitude_deg": 0, "longitude_deg": 0, "absolute_altitude_m": 0.0 }

const SOCKET_SERVER_ENDPOINT = 'ws://127.0.0.1:8088/v1/ws/mavlink?filter=GPS_RAW_INT';



function GpsInfo() {

    const [gpsPos, setGpsPos] = useState(DEFAULT_POSITION_STATE)

    const [secondGpsPos, setSecondGpsPos] = useState(DEFAULT_POSITION_STATE);



    useEffect(() => {

        const socket = new WebSocket(SOCKET_SERVER_ENDPOINT);

        socket.onopen = () => {

            console.log("The web socket connection was opened");

        };



        socket.onmessage = (event) => {

            const message = JSON.parse(event.data);

            console.log("received message: ", message);

            const newGpsPos = {

                "latitude_deg": message.message.lat, "longitude_deg": message.message.lon, "absolute_altitude_m": message.message.alt

            }

            setGpsPos(newGpsPos);

        }



        socket.onclose = () => {

            console.log("Websocket connection closed");

        }



        socket.onerror = (error) => {

            console.error("Websocket error: ", error);

        }



        return () => {

            socket.close();

        }

    }, []);



    return (

        <div>

            <div>Latitude: {gpsPos.latitude_deg},Longitude: {gpsPos.longitude_deg},Altitude: {gpsPos.absolute_altitude_m}</div>

        </div>

    )

}



export default GpsInfo