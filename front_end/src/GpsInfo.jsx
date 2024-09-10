import React, {useState, useEffect} from 'react'

const GPS_REST_ENDPOINT = 'http://localhost:8081/gps'
const GPS_REST_ENDPOINT_TWO = 'http://127.0.0.1:8088/v1/mavlink/vehicles/1/components/1/messages/GPS_RAW_INT'
const DEFAULT_POSITION_STATE = {"latitude_deg": 0, "longitude_deg":0, "absolute_altitude_m":0.0}

function GpsInfo(){
    const [gpsPos, setGpsPos] = useState(DEFAULT_POSITION_STATE)
    const [secondGpsPos, setSecondGpsPos] = useState(DEFAULT_POSITION_STATE);

    //Uncomment the implementation you want to try. The first is mavsdk server the second is mavlink2rest
    useEffect(()=>{

        //MAVSDKSERVER

        // const timer = setInterval(async()=>{
        //     const res = await fetch(GPS_REST_ENDPOINT);
        //     const newGpsPos = await res.json();
        //     setGpsPos(newGpsPos);
        // }, 500);

        // return () => clearInterval(timer);

        //MAVLINK2REST

        // const timer = setInterval(async()=>{
        //     const res = await fetch(GPS_REST_ENDPOINT_TWO);
        //     const newGpsPosJson = await res.json();
        //     const newGpsPos = {
        //         "latitude_deg": newGpsPosJson.message.lat, "longitude_deg":newGpsPosJson.message.lon, "absolute_altitude_m":newGpsPosJson.message.alt
        //     }
        //     setGpsPos(newGpsPos);
        // }, 500);

        // return () => clearInterval(timer);
    },[]);

    return (
        <div>
        <div>Latitude: {gpsPos.latitude_deg},Longitude: {gpsPos.longitude_deg},Altitude: {gpsPos.absolute_altitude_m}</div>
        </div>
    )
}

export default GpsInfo
