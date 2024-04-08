import {CityType} from "../02/02_02";
import {addMoneyToBudget, greetingMessage, repairHouse, toFireStaff, toHireStaff} from "./03_02";

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
test('budget should be changed for HOSPITAL', ()=> {
    addMoneyToBudget(city.governmentBuildings[0], 100000)
expect(city.governmentBuildings[0].budget).toBe(300000)
});

test('budget should be changed for FIRE-STATION', ()=> {
    addMoneyToBudget(city.governmentBuildings[1], -100000)
expect(city.governmentBuildings[1].budget).toBe(400000)
});
test('House should be repaired', ()=> {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy()
})
test('staff should be decreased', ()=> {
    toFireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})
test('staff should be increased', ()=> {
    toHireStaff(city.governmentBuildings[1], 10);
    expect(city.governmentBuildings[1].staffCount).toBe(810)
})
test('Hello citizens of New York!', ()=> {
    const message = greetingMessage(city);
    expect(message).toBe('Hello citizens New York All 1000000')
})