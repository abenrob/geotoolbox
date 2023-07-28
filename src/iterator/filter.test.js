import { filter } from "./filter";
import world from '../../testing/world.json';

describe('iterator>filter module', () => {
    it('filters a FeatureCollection based on an expression', () => {
        const fc = filter(world,
            {
                expression: "pop >= 100000"
        })
        expect(fc).toBeFeatureCollection();
        expect(fc.features.length).toEqual(185);
    })
})