/**
 * @PTalluru
 * 
 * 3. Create a set object with four random numbers from 0 to 10. Check if this
    newly created set object has 8 in it. Use set object methods.
 */



let randomNum = () => { 
    return Math.floor(Math.random() * 10) + 1;
}
let set = new Set([randomNum(),randomNum(),randomNum(),randomNum()]);

set.forEach((value) => {
    console.log(value);
})

console.log(set.has(8));

let setA = new Set(['a','b','d','c']);
setA.forEach((e)=> {
    console.log(e)
})
console.log(setA.delete('b'));
