export class GpsTelemetry {
    public altitude: number ;
    public latitude: number;
    public longitude: number;

    constructor(altitude:number, latitude:number, longitude:number){
        this.altitude = altitude;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    setAltitude(altitude: number){
        this.altitude = altitude;
    }

    setLatitude(latitude: number){
        this.latitude = latitude;
    }

    setLongitude(longitude: number){
        this.longitude = longitude;
    }

}