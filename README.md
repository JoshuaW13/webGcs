## Overview

This repo contains a prototype for the web based GCS demonstrating basic commands for arming and disarming motors as well as takeoff and landing.

## Setup and Running

### Mission Planner

Mission planner is the GCS used to simulate a drone and verify correct implementation for features on our end. Below are steps to set it up and get it running.

1. Install mission planner [here](https://ardupilot.org/planner/docs/mission-planner-installation.html)
2. Open Mission planner and navigate to the simulation tab.
3. Choose multirotor and run the latest stable version.
4. Go to the setup tab, click the advanced menu and select mavlink mirror. Here choose UDP client, any baudrate and check the write access box. Click connect and when prompted give an IP of 127.0.0.1 and a port of 14660.

Now mission planner should be good to go to simulate the vehicle!

### Mavlink2RestApi

Mavlink2RestApi is what we are using as a messaging backend. It abstracts away a good amount of the networking side of things leaving only protocol specifics for us to handle.

1. Download the latest release of the api [here](https://github.com/mavlink/mavlink2rest)
2. Run with ```mavlink2rest-x86_64-pc-windows-msvc.exe -c udpin:127.0.0.1:14560```

### Front end

Our front end is React application and can be run from the front_end directory with ```npm start```. You will need npm and node js installed as prerequisites.