const ages = [18,20,22,1,100,90,14];

const oldAge = [100];

export type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]
const cheapPredicate = (courses: CoursesType) => {
  return courses.price < 160;
}