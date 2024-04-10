
export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}
let props: ManType;
beforeEach(()=> {
    props = {
        name: "Evgen",
        age: 44,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Lenina"
            }
        }
    }
})
test('', () => {
    let props = {
        name: "Evgen",
        age: 44,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Lenina"
            }
        }
    }

    const age = props.age
    const lessons = props.lessons
    const {title} = props.address.street

    expect(age).toBe(44)
    expect(lessons[0].title).toBe("1")
    expect(title).toBe('Lenina')
})