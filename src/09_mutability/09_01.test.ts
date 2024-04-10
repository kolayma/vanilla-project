type UserType = {
    name: string
    age: number
    address: { title: string }
}


function increaseAge(u: { address: string; name: string; age: number }) {
    u.age++
}


test('increase age of user', () => {
    let user = {
        name: "Evgesha",
        age: 44,
        address: "Moscow"
    }
    increaseAge(user)
    expect(user.age).toBe(45)
})
test('reference test', () => {
    let user = {
        name: "Evgesha",
        age: 44,
        address: "Moscow"
    }
    increaseAge(user)
    let superman = user

    expect(superman.age).toBe(45)
})
test('array test', () => {
    let users = [
        {name: "Evgesha", age: 44},
        {name: "Katya", age: 40},
    ]
    let admins = users
    admins.push({name: "chuvak", age: 10})

    expect(users[2]).toEqual({name: "chuvak", age: 10})
})
test('reference type arrat test', () => {
        let address: { title: string } = {
            title: "Moscow"
        }
        let user1: UserType = {
            name: "Evgesha",
            age: 44,
            address: address
        }
        let user2: UserType = {
            name: "Katya",
            age: 40,
            address: address}

const userss = [user1, user2, {name: "Kristi", age: 17, address: address}]
    const admins = [user1, user2]
    expect(userss[0].name).toBe('Evgesha');
        expect(user.name).toBe('Evgesha')

    }
)
