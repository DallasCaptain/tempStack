var bob={val:1}
let carl={val:2}
const nick ={val:3}
nick.val = 'nick.val + 1'
console.log(nick)
var people =[bob,carl,nick]
for(let person in people){  
    people[person].val = 7
}

console.log(people)

