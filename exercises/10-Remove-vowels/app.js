// Your code goes here

let rapid = (frase) => {

   let cadena=[]
   
   for (let letra of frase){
    
    if (letra == "a" || letra == "e" || letra == "i" || 
    letra == "o" || letra == "u") 
    {
         continue

    } else {cadena.push(letra.toUpperCase())}
      
   } 

   return cadena.join('');


}
// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
