import {greetingMessage, ManType} from "./05_01";

let people: Array<ManType> = []
beforeEach(()=> {
    people = [
        {name: 'Andrew Ivanov', age:33},
        {name: 'Alexander Petrov', age:24},
        {name: 'Dmitry Sidorov', age:18},
    ]
})
test('should be greeted people', ()=> {
    let message = greetingMessage(people)

    expect(message[0]).toBe('Hello Andrew. Welcome to IT-Incubator.');
    expect(message[1]).toBe('Hello Alexander. Welcome to IT-Incubator.');
    expect(message[2]).toBe('Hello Dmitry. Welcome to IT-Incubator.');
})