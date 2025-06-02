class Pet{
    constructor(name){
        this.name = name
    }
}

class PetFactory{
    cretePet(name){
        return new Pet(name)
    }
}



const factory = new PetFactory()
const p1 = factory.cretePet("pepito")
const p2 = factory.cretePet("feliz")

console.log(p1 == p2);