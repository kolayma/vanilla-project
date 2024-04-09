import {CityType} from "../02/02_02";
import {greetMesForStreets, listStreetsTitles, listStreetTitles} from "./05_02";

let city: CityType;

beforeEach( ()=> {
    city = {
        title: "New York",
        houses: [
            {builtAt: 2012, repaired: false,
                address: {number: 108, street: {title: "White street"}}},
            {builtAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}},
            {builtAt: 2020, repaired: false,
                address: {number: 99, street: {title: "Black street"}}},
        ],
        governmentBuildings: [{
            type: "HOSPITAL", budget: 200000, staffCount: 200,
            address: {
                street: {title: 'Central Str'}
            }
        },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 800,
                address: {
                    street: {title: 'South Str'}
                }
            }],
        citizensNumber: 1000000
    }
} )



test('list of street titles of GovernmentBuildings', ()=> {
    let streetNames = listStreetTitles(city.governmentBuildings);

    expect(streetNames.length).toBe(2);
    expect(streetNames[0]).toBe('Central Str');
    expect(streetNames[1]).toBe('South Str');
})
test('list of streets titles', ()=> {
    let streetTitles = listStreetsTitles(city.houses);

    expect(streetTitles.length).toBe(3);
    expect(streetTitles[0]).toBe('White street');
    expect(streetTitles[1]).toBe('Happy street');
    expect(streetTitles[2]).toBe('Black street');
})
test('create greeting for streets', ()=> {
    let messages = greetMesForStreets(city.houses);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello guys from White street');
    expect(messages[1]).toBe('Hello guys from Happy street');
    expect(messages[2]).toBe('Hello guys from Black street');
})