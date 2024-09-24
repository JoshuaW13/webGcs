import './App.css';
import ActionButton from './ActionButton';
import GpsInfo from "./GpsInfo"

function ArmDrone() {
  console.log("Doing the api arm drone!");
  fetch('http://127.0.0.1:8088/v1/mavlink', {
    method: "POST",
    body: JSON.stringify({
      "header": {
        "system_id": 255,
        "component_id": 240,
        "sequence": 0
      },
      "message": {
        "type": "COMMAND_LONG",
        "param1": 1.0,
        "param2": 0.0, "param3": 0.0, "param4": 0.0, "param5": 0.0, "param6": 0.0, "param7": 0.0,
        "command": {
          "type": "MAV_CMD_COMPONENT_ARM_DISARM"
        },
        "target_system": 1,
        "target_component": 1,
        "confirmation": 1
      }
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}


function DisarmDrone() {
  console.log("Doing the api arm drone!");
  fetch('http://127.0.0.1:8088/v1/mavlink', {
    method: "POST",
    body: JSON.stringify({
      "header": {
        "system_id": 255,
        "component_id": 240,
        "sequence": 0
      },
      "message": {
        "type": "COMMAND_LONG",
        "param1": 0.0,
        "param2": 0.0, "param3": 0.0, "param4": 0.0, "param5": 0.0, "param6": 0.0, "param7": 0.0,
        "command": {
          "type": "MAV_CMD_COMPONENT_ARM_DISARM"
        },
        "target_system": 1,
        "target_component": 1,
        "confirmation": 1
      }
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}

function TakeoffDrone() {
  console.log("Doing the api arm drone!");
  fetch('http://127.0.0.1:8088/v1/mavlink', {
    method: "POST",
    body: JSON.stringify({
      "header": {
        "system_id": 255,
        "component_id": 240,
        "sequence": 0
      },
      "message": {
        "type": "COMMAND_LONG",
        "param1": 0,
        "param2": 0, "param3": 0, "param4": 0, "param5": 0, "param6": 0, "param7": 10,
        "command": {
          "type": "MAV_CMD_NAV_TAKEOFF"
        },
        "target_system": 1,
        "target_component": 1,
        "confirmation": 1
      }
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}

function LandDrone() {
  console.log("Doing the api arm drone!");
  fetch('http://127.0.0.1:8088/v1/mavlink', {
    method: "POST",
    body: JSON.stringify({
      "header": {
        "system_id": 255,
        "component_id": 240,
        "sequence": 0
      },
      "message": {
        "type": "COMMAND_LONG",
        "param1": 0,
        "param2": 0, "param3": 0, "param4": 0, "param5": 0, "param6": 0, "param7": 0,
        "command": {
          "type": "MAV_CMD_NAV_LAND"
        },
        "target_system": 1,
        "target_component": 1,
        "confirmation": 1
      }
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}

function App() {
  return (
    <div className="App">
      <ActionButton action={ArmDrone} buttonText=" Arm"></ActionButton>
      <ActionButton action={DisarmDrone} buttonText=" DisArm"></ActionButton>
      <ActionButton action={TakeoffDrone} buttonText=" Takeoff"></ActionButton>
      <ActionButton action={LandDrone} buttonText=" Land"></ActionButton>
      <GpsInfo></GpsInfo>
    </div>
  );
}

export default App;