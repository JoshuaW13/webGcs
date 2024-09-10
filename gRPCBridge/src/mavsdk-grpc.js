const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const pathLib = require("path");

const MAVLINK_PROTO_PATH = pathLib.join(__dirname,'/../MAVSDK-Proto/protos');
const MAVLINK_ACTION_PROTO_PATH = pathLib.join(MAVLINK_PROTO_PATH,'/action/action.proto');
const MAVLINK_TELEMETRY_PROTO_PATH = pathLib.join(MAVLINK_PROTO_PATH,'/telemetry/telemetry.proto');
console.log(MAVLINK_ACTION_PROTO_PATH);
const ACTION_PACKAGE_DEFINITION = protoLoader.loadSync(
    MAVLINK_ACTION_PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
        includeDirs: [MAVLINK_PROTO_PATH]
    }
);
const TELEMETRY_PACKAGE_DEFINITION = protoLoader.loadSync(
    MAVLINK_TELEMETRY_PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
        includeDirs: [MAVLINK_PROTO_PATH]
    }
);

const GRPC_HOST_NAME = "127.0.0.1:50000";

class MAVSDKDrone{
    constructor(){
        this.Action = grpc.loadPackageDefinition(ACTION_PACKAGE_DEFINITION).mavsdk.rpc.action;
        this.ActionClient = new this.Action.ActionService(GRPC_HOST_NAME, grpc.credentials.createInsecure());
        this.Telemetry = grpc.loadPackageDefinition(TELEMETRY_PACKAGE_DEFINITION).mavsdk.rpc.telemetry;
        this.TelemetryClient = new this.Telemetry.TelemetryService(GRPC_HOST_NAME, grpc.credentials.createInsecure());
        this.position = {};
        this.SubscribeToGps();
    }

    Arm(){
        this.ActionClient.arm({}, (err, actionResponse)=>{
            if(err){
                console.log("Unable to arm drone: ", err);
                return;
            }
            console.log("Tried to arm!");
        })
    }
    DisArm(){
        this.ActionClient.disarm({}, (err, actionResponse)=>{
            if(err){
                console.log("Unable to disarm drone: ", err);
                return;
            }
            console.log("Tried to disarm!");
        })
    }
    Takeoff(){
        this.ActionClient.takeoff({}, (err, actionResponse)=>{
            if(err){
                console.log("Unable to take off drone: ", err);
                return;
            }
            console.log("Tried to takeoff!");
        })
    }
    Land(){
        this.ActionClient.land({}, (err, actionResponse)=>{
            if(err){
                console.log("Unable to land drone: ", err);
                return;
            }
            console.log("Tried to land!");
        })
    }
    SubscribeToGps(){
        const self = this;
        this.GpsCall = this.TelemetryClient.subscribePosition({});
        this.GpsCall.on('data', (gpsInfoResponse)=>{
            //console.log(gpsInfoResponse);
            self.position = gpsInfoResponse.position;
            return;
        })
        this.GpsCall.on('end', ()=>{
            console.log("Subscribe position request ended");
            return;
        })
        this.GpsCall.on('error',(e)=>{
            console.log(e);
            return;
        })
        this.GpsCall.on('status',(status)=>{
            console.log(status);
            return;
        })
    }
}

module.exports = MAVSDKDrone;