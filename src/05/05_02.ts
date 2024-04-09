import {GovernmentBuildingsType, HousesType} from "../02/02_02";

export function listStreetTitles(buildings: Array<GovernmentBuildingsType>) {
   return  buildings.map(b=> b.address.street.title)
}
export function listStreetsTitles(buildings: Array<HousesType>) {
    return buildings.map(b => b.address.street.title)
}
export const greetMesForStreets = (houses: Array<HousesType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}