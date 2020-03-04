function person(name, age){
    this.name = name
    this.age = age
    this.greet = function(){
        console.log('hi my name is', this.name)
    }

}

class pet{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
    setBreed(newbreed){
        this.breed = newbreed
    }
}

class cat extends pet{
    constructor(name,breed,colarColor){
        super(name,breed)
        this.breed = 'siamese'
        this.colarColor = colarColor
    }

    
}

let bob = new person('bob',33)
let fluffy = new cat()
bob.greet()
console.log(fluffy)
fluffy.setBreed('calico')


fluffy.breed = 'boxer'
console.log(fluffy)