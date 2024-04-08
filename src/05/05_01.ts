export type ManType = {
    name: string
    age: number
}
const people = [
    {name: 'Andrew Ivanov', age:33},
    {name: 'Alexander Petrov', age:24},
    {name: 'Dmitry Sidorov', age:18},
]

const transformator = (man: ManType) => {

}
const  devs = []

const dev2 = [
    transformator(people[0]),
    transformator(people[1]),
    transformator(people[2]),
]
const message = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator.`)

export const greetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator.`)
}