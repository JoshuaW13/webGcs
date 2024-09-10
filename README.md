### Overview

This repo prototypes out arm, disarm, takeoff, land and viewing GPS info for a mavsdk server and a mavlink2restapi based implementation.

Steps to run:
1. start mission planner with a multirotor sim. Go to setup -> advanced and mavlink mirror. Set it to udp client, 115200 for baudrate and connect using local host and port 14560.
2. 2 options:
	1. Run MAV sdk server and the GRPC to Rest Node Js Server.
	2. Run Mavlink2RestApi
3. Run Setting Up Project skeleton#React front end|React front end the front end 

### Individual Tool Setups
#### Mission Planner:
- installed mission planner
- run mission planner simulation as multirotor x and use mavlink mirror on port 14560, udp client, 115200 baud rate and connect. You can now connect with a separate instance of mission planner to same vehicle.
####  MAV sdk server:
clone the repo:
```

git clone https://github.com/mavlink/MAVSDK.git
git submodule update --init --recursive

```
After cloning the repo navigate to it and run the following. You will need MSVC 2022 with C++ build tools, cmake and strawberry perl installed:
```
cmake -DCMAKE_INSTALL_PREFIX=build/install_debug -DCMAKE_BUILD_TYPE=Debug -DBUILD_SHARED_LIBS=OFF -DBUILD_TESTS=OFF -DBUILD_MAVSDK_SERVER=YES -Bbuild/debug
cmake --build build/debug --config Debug --target install
```
run 
```
path/to/executable/mavsdk_server_bin.exe udp://:14560 -p 50000
```
#### GRPC to Rest Node Js Server
You need node installed to run this. The server can be run with the below command
```
node src\mavsdk-rest.js
```
#### React front end
Run with
```
npm start
```

#### Mavlink2RestApi
- Use the second buttons on the webpage to test out this implementation.
- Easy to run but for some reason endpoints only work when you use 127.0.0.1 as local host not 0.0.0.0
- You need to be in Guided mode to takeoff. You can do this from mission planner for now.