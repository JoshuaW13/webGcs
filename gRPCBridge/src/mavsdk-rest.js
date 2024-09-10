let cors = require('cors');

let express = require('express');
let app = express();
console.log("Hello World!");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const UNSAFE_FRONT_END_URL="*";

app.use(cors(
    {
        origin: UNSAFE_FRONT_END_URL,
        methods: ["GET", "POST"]
    }
));

const http = require('http');
const server = http.createServer(app);

let MAVSDKDrone = require('./mavsdk-grpc.js');
let drone = new MAVSDKDrone();

app.get('/arm', function(req, res){
    console.log("Hello from arm!")
    drone.Arm();
    res.sendStatus(200);
})

app.get('/disarm', function(req, res){
    console.log("Hello from disarm!")
    drone.DisArm();
    res.sendStatus(200);
})

app.get('/takeoff', function(req, res){
    console.log("Hello from takeoff!")
    drone.Takeoff();
    res.sendStatus(200);
})

app.get('/land', function(req, res){
    console.log("Hello from land!")
    drone.Land();
    res.sendStatus(200);
})

app.get('/gps', (req, res)=>{
    //console.log("Hello from gps");
    res.send(drone.position);
})

server.listen(8081, ()=>{
    let host = server.address().address;
    let port = server.address().port;

    console.log("example app listening at https://%s:%s", host, port);
})