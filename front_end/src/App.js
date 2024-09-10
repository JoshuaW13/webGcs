import './App.css';
import ActionButton from './ActionButton';
import GpsInfo from "./GpsInfo"

function ArmDrone(){
  console.log("Arming from front end!")
  fetch('http://localhost:8081/arm',{
      method: 'GET',
      headers:{
        Accept: 'application/json',
          'Content-Type': 'application/json',
      },
  });
}
function DisarmDrone(){
  console.log("Arming from front end!")
  fetch('http://localhost:8081/disarm',{
      method: 'GET',
      headers:{
        Accept: 'application/json',
          'Content-Type': 'application/json',
      },
  });
}
function TakeoffDrone(){
  console.log("Arming from front end!")
  fetch('http://localhost:8081/takeoff',{
      method: 'GET',
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
  });
}
function LandDrone(){
  console.log("Arming from front end!")
  fetch('http://localhost:8081/land',{
      method: 'GET',
      headers:{
        Accept: 'application/json',
          'Content-Type': 'application/json',
      },
  });
}

function SecondArmDrone(){
  console.log("Doing the api arm drone!");
  fetch('http://127.0.0.1:8088/v1/mavlink',{
    method: "POST",
    body: JSON.stringify({
      "header": {
        "system_id": 255,
        "component_id": 240,
        "sequence": 0
      },
      "message": {
        "type":"COMMAND_LONG",
        "param1": 1.0,
        "param2": 0.0,"param3":0.0,"param4":0.0,"param5":0.0,"param6":0.0,"param7":0.0,
        "command": {
          "type": "MAV_CMD_COMPONENT_ARM_DISARM"
        },
        "target_system": 1,
        "target_component": 1,
        "confirmation": 1
      }
    }),
    headers:{
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}

//sakdljsakd

function SecondDisarmDrone(){
  console.log("Doing the api arm drone!");
  fetch('http://127.0.0.1:8088/v1/mavlink',{
    method: "POST",
    body: JSON.stringify({
      "header": {
        "system_id": 255,
        "component_id": 240,
        "sequence": 0
      },
      "message": {
        "type":"COMMAND_LONG",
        "param1": 0.0,
        "param2": 0.0,"param3":0.0,"param4":0.0,"param5":0.0,"param6":0.0,"param7":0.0,
        "command": {
          "type": "MAV_CMD_COMPONENT_ARM_DISARM"
        },
        "target_system": 1,
        "target_component": 1,
        "confirmation": 1
      }
    }),
    headers:{
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}

function SecondTakeoffDrone(){
  console.log("Doing the api arm drone!");
  fetch('http://127.0.0.1:8088/v1/mavlink',{
    method: "POST",
    body: JSON.stringify({
      "header": {
        "system_id": 255,
        "component_id": 240,
        "sequence": 0
      },
      "message": {
        "type":"COMMAND_LONG",
        "param1": 0,
        "param2": 0,"param3":0,"param4":0,"param5":0,"param6":0,"param7":10,
        "command": {
          "type": "MAV_CMD_NAV_TAKEOFF"
        },
        "target_system": 1,
        "target_component": 1,
        "confirmation": 1
      }
    }),
    headers:{
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}

function SecondLandDrone(){
  console.log("Doing the api arm drone!");
  fetch('http://127.0.0.1:8088/v1/mavlink',{
    method: "POST",
    body: JSON.stringify({
      "header": {
        "system_id": 255,
        "component_id": 240,
        "sequence": 0
      },
      "message": {
        "type":"COMMAND_LONG",
        "param1": 0,
        "param2": 0,"param3":0,"param4":0,"param5":0,"param6":0,"param7":0,
        "command": {
          "type": "MAV_CMD_NAV_LAND"
        },
        "target_system": 1,
        "target_component": 1,
        "confirmation": 1
      }
    }),
    headers:{
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}

function App() {
  return (
    <div className="App">
      <ActionButton action = {ArmDrone} buttonText = "Arm"></ActionButton>
      <ActionButton action = {DisarmDrone} buttonText = "Disarm"></ActionButton>
      <ActionButton action = {TakeoffDrone} buttonText = "Takeoff"></ActionButton>
      <ActionButton action = {LandDrone} buttonText = "Land"></ActionButton>
      <ActionButton action = {SecondArmDrone} buttonText = "Second Arm"></ActionButton> 
      <ActionButton action = {SecondDisarmDrone} buttonText = "Second DisArm"></ActionButton>  
      <ActionButton action = {SecondTakeoffDrone} buttonText = "Second Takeoff"></ActionButton>
      <ActionButton action = {SecondLandDrone} buttonText = "Second Land"></ActionButton>
      <GpsInfo></GpsInfo>
    </div>
  );
}

export default App;
