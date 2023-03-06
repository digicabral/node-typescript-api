import { Beach, GeoPosition } from "@src/models/beach";

export class Rating {
    constructor(private beach: Beach){}

    public getRatingBasedOnWindAndWavePositions(wavePosition: GeoPosition, windPosisition: GeoPosition): number{
        if(wavePosition === windPosisition){
            return 1;
        }
        else if(this.isWindOffShore(wavePosition, windPosisition)){
            return 5;
        }
        return 3;
    }

    private isWindOffShore(wavePosition: GeoPosition, windPosisition: GeoPosition): boolean{
        return(
            (wavePosition == GeoPosition.N &&
                windPosisition == GeoPosition.S &&
                this.beach.position == GeoPosition.N) ||
            (wavePosition == GeoPosition.S &&
                windPosisition == GeoPosition.N &&
                this.beach.position == GeoPosition.S) ||
            (wavePosition == GeoPosition.E &&
                windPosisition == GeoPosition.W &&
                this.beach.position == GeoPosition.E) ||
            (wavePosition == GeoPosition.W &&
                windPosisition == GeoPosition.E &&
                this.beach.position == GeoPosition.W)
        );
    }
}