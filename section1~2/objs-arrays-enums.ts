// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name:string;
//   age:number;
//   hobbies: string[];
//   role:[number, string];
// } = {
//   name: "DoDo",
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// person.role.push('user'); 
// console.log(person.role);

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200};//소문자도가능

const person = {
  name: "DoDo",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

if(person.role === Role.ADMIN){
 console.log('is admin')
}


let favoriteActivities: any[];

// for (const hobby of person.hobbies) {
//   console.log(hobby);
  //console.log(hobby.map())
// }
//위 경우 hobbis가 문자열인걸 ts가 알고있으므로 각각의 배열값이 출력이 잘 된다.
//그러므로 22번라인처럼 hobby를 map으로 돌리고자 하면 오류가 난다. map함수는 문자열에 사용이 불가하기 때문이다.


console.log(person.name);
