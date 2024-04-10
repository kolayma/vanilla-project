
type UsersType = {
    [key: string]: {id: number, name: string}
}
let users: UsersType;

beforeEach(()=> {
    users = {
        '102': {id:102, name:'Evgesha'},
        '101': {id:101, name:'Natasha'},
        '104': {id:104, name:'Valera'},
        '103': {id:103, name:'Katya'},
    }
})

test('should select corresponding user from obj', ()=> {
    users['103'].name = 'Ekaterina'

    expect(users['103'].name).toBe('Ekaterina');
})
test('should delete corresponding user from obj', ()=> {
    delete users['103']
    expect(users['103']).toBeUndefined()
})