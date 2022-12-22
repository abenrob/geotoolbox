import { clip } from "./clip";
import { subset } from "../properties/subset";
import { buffer } from "./buffer";
import world from '../../testing/world.json';
import worldlines from '../../testing/worldlines.json';
import africacentroids from '../../testing/africacentroids.json'

const benin = subset({
    x: world,
    field: "ISO3",
    selection: "BEN"
});

const buff = buffer(benin, { dist: 4000 });

const buff2 = buffer(benin, { dist: -4000 });

describe('gis>clip module', () => {
    it('calculate intersection between a FeatureCollection of polygons and a single polygon', () => {
        const fc = clip(world, { clip: buff })
        expect(fc).toBeFeatureCollection();
        expect(fc.features.length).toEqual(72);
    })
    // failing for points
    // it('calculate intersection between a FeatureCollection of points and a single polygon', () => {
    //     const fc = clip(africacentroids, { clip: buff })
    //     expect(fc).toBeFeatureCollection();
    //     expect(fc.features.length).toEqual(72);
    // })
    // failing for lines
    // it('calculate intersection between a FeatureCollection of lines and a single polygon', () => {
    //     const fc = clip(worldlines, { clip: buff })
    //     expect(fc).toBeFeatureCollection();
    //     expect(fc.features.length).toEqual(72);
    // })
    // failing for reverse buffer...
    // it('calculate reverse intersection between a FeatureCollection of polygons and a single polygon', () => {
    //     const fc = clip(world, { clip: buff2, reverse: true })
    //     expect(fc).toBeFeatureCollection();
    //     expect(fc.features.length).toEqual(153);
    // })
})