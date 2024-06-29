//we are creating a menu, and a class for each item on menu
// We are going to try use decorators to assign ids to our classes
//The outer function will be responsible for accepting values, whereas inner function wil be interacting with the targets
function MenuItem(itemID: string) {
        return function (value) { 
        //since this decorator is being applied to a class, it must also return a class as its VALUE
        // the Menuitem function will return the function for modifying the class
        //whatever is returned here will be applied to the classes that are being decorated. Here we are setting the ids for the classs to abc
        return class extends value { 
            id = itemID;
        };
    };
}

@MenuItem("abc") //you mount a decorator ON TOP of the class as so
class Pizza {
    id: string;
}

@MenuItem("def") //you mount a decorator ON TOP of the class as so
class Burger {
    id: string;
}

console.log(new Pizza().id);