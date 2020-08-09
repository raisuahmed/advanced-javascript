// const students = [
//     {id: 21, name: 'Rasel'},
//     {id: 31, name: 'Rintu'},
//     {id : 41, name: 'Hasnat'},
//     {id: 71, name: 'Liton'}
// ];

// const names = students.map( s =>s.name);
// const ids = students.map( s => s.id);
// console.log(names);
// console.log(ids);

// const students = [
//     {id: 21, name: 'Rasel'},
//     {id: 31, name: 'Rintu'},
//     {id : 41, name: 'Hasnat'},
//     {id: 71, name: 'Liton'}
// ];

// const names = students.filter( s =>s.id>40);

// console.log(names);

const students = [
    {id: 21, name: 'Rasel'},
    {id: 31, name: 'Rintu'},
    {id : 41, name: 'Hasnat'},
    {id: 71, name: 'Liton'}
];

const name = students.find( s =>s.id>40);

console.log(name);