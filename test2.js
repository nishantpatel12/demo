class person {
constructor(name,age){
    this.name=name;
    this.age=age;   
}
    works(){
        console.log("works 12hr")
    }

}
class student extends person{
    study(){
        console.log("studys 4hr")
    }
}

const nishantobj = new person("Nishant",22) 
console.log(nishantobj)

console.log("helllo")
console.log("hello world")