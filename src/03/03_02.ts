import {StudentType} from '../02/02'
import {CityType, GovernmentBuildingsType, HousesType} from "../02/02_02";



export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getDate(),
        title: skill
    })
}
export function makeStudentActive (s: StudentType) {
    s.isActive = true;
}
export  const  doesStudentLive = (s: StudentType, cityName: string) => {
    return s.address.city  === cityName;
}
export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}
export const repairHouse = (house: HousesType) => {
    house.repaired = true
}
export function toFireStaff(building: GovernmentBuildingsType, staffCount: number) {
    building.staffCount -= staffCount;
}
export function toHireStaff(building: GovernmentBuildingsType, staffCount: number) {
    building.staffCount += staffCount;
}
export const greetingMessage = (props: CityType)=> {
    return `Hello citizens ${props.title} All ${props.citizensNumber}`
}