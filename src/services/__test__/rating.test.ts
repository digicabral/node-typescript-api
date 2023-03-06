import { GeoPosition } from "@src/models/beach"
import { Rating } from "../rating";

describe('Rating service',()=>{
    const defaultbeach = {
        lat: -33.792726,
        lng: 151.289824,
        name: 'Manly',
        position: GeoPosition.E,
        user: 'fake-id',
    };

    const defaultRating = new Rating(defaultbeach);

    describe('Calculate rating for a given point',()=>{
        //TODO
    });

    describe('',()=>{
        it('should get rating 1 for a beach with onshore winds',()=>{
            const rating = defaultRating.getRatingBasedOnWindAndWavePositions(
                GeoPosition.E,
                GeoPosition.E
                );
            expect(rating).toBe(1);
        });

        it('should get rating 3 for a beach with cross winds',()=>{
            const rating = defaultRating.getRatingBasedOnWindAndWavePositions(
                GeoPosition.E,
                GeoPosition.S
                );
            expect(rating).toBe(3);
        });

        it('should get rating 5 for a beach with offshore winds',()=>{
            const rating = defaultRating.getRatingBasedOnWindAndWavePositions(
                GeoPosition.E,
                GeoPosition.W
                );
            expect(rating).toBe(5);
        });
    });

});