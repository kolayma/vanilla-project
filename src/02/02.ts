type TechnologiesType = {
    id: number,
    title: string
}
type AddressType = {
    street: string,
    city: string,
    country: string
}
type StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
    id: 1,
    name: "Evgesha",
    age: 44,
    isActive: false,
    address: {
        street: "Grushevaya",
        city: "Yuzhnui",
        country: "RF"
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "CSS",
        },
        {
            id: 3,
            title: "React",
        }
    ]
}

console.log(student.technologies[0].title)