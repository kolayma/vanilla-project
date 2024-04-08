import {CityType, GovernmentBuildingsType} from "../02/02_02";

export function demolishHouses(city: CityType, street: string) {
    city.houses = city.houses.filter(s => s.address.street.title !== street)
}
export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingsType>, number: number) => {
    return buildings.filter(b => b.staffCount > number)
}