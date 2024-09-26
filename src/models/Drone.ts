import { GpsTelemetry } from "./GpsTelemetry";

export class Drone {
    public id: string;
    public gpsTelemetry: GpsTelemetry;

    constructor(id: string) {
        this.id = id;
        this.gpsTelemetry = new GpsTelemetry(0.0, 0.0, 0.0);
    }

    public updateTelemetry(data: GpsTelemetry) {
        if (data.altitude != undefined){
            this.gpsTelemetry.altitude = data.altitude;
        }
        if (data.latitude != undefined){
            this.gpsTelemetry.latitude = data.latitude;
        }
        if (data.longitude != undefined){
            this.gpsTelemetry.longitude = data.longitude;
        }
        return this;
    }

    public clone(): Drone{
        return new Drone(this.id).updateTelemetry(this.gpsTelemetry);
    }
}
