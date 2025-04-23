// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function  destructivelyRemoveLastCat (){
    cats.pop();
}

function destructivelyRemoveFirstCat (){ 
    cats.shift()
}

function appendCat(name){
    const newCats = [...cats, name]
    return newCats
}

const newCats = appendCat("Broom")

function prependCat(name){
    const newsecCats = [name, ...cats]
    return newsecCats;
}
const newsecCats = prependCat("Arnold")

function removeLastCat(){
   
    return cats.slice(0, -1)
}

function removeFirstCat(){
    return cats.slice(1)
}

