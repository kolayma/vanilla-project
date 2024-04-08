import {StudentType} from "../02/02";
import {addSkill, doesStudentLive, makeStudentActive} from "./03_02";

let student: StudentType;

beforeEach( ()=> {
    student = {
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
} )
test('test have to add a new skill to a student', ()=> {
    expect(student.technologies.length).toBe(3)
    addSkill(student, "JS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()

})

test('student should be made an active', ()=> {
    expect(student.isActive).toBe(false);

    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})
test('does a student live in city?', () => {

    let result1 = doesStudentLive(student, "Yuzhnui")
    let result2 = doesStudentLive(student, "Moscow")

    expect(result1).toBe(true)
    expect(result2).toBe(false)
})