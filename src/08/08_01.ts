/*export const usersArray = ['Evgesha', 'Natasha', 'Valera', 'Katya']

export const usersObj = {
    '0': 'Evgesha',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}*/
type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '102': {id:102, name:'Evgesha'},
    '101': {id:101, name:'Natasha'},
    '104': {id:104, name:'Valera'},
    '103': {id:103, name:'Katya'},
}
let user = {id: 100500, name: 'Igor'}
users[user.id] = user
delete users[user.id]
console.log(users)
