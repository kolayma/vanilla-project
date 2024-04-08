test('should take a person older then 90', ()=> {
    const ages = [18,20,22,1,100,90,14];
    const older = ages.filter(a => a > 90)

    expect(older.length).toBe(1);
    expect(older[0]).toBe(100);
})
test('should price lower then 160', ()=> {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ]
    const cheapCourses = courses.filter(course => course.price < 160)

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe('CSS');
    expect(cheapCourses[1].title).toBe('REACT');
})
test('should get completed tasks', ()=> {
    const tasks = [
        {id:1, title: 'Bread', isDone: false},
        {id:2, title: 'Milk', isDone: true},
        {id:3, title: 'Solt', isDone: false},
        {id:4, title: 'Sugar', isDone: true},
    ]
    const completedTasks = tasks.filter(t=> !t.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(1);
    expect(completedTasks[1].id).toBe(3);
})