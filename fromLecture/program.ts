let a: number = 5;
//console.log(a);

let text: string = "Hello";
//console.log(text);

let numberArray: number[] = [1, 2, 3, 4, 5];
let numberArrayTwo: Array<number> = [10, 11, 12];

let stringArray: string[] = ["proba", "text", "more text"];

// numberArray.forEach(number => {
//     console.log(number);
// });

//TypeScript Type Aliases and Interfaces
type Person = {
    name: string,
    age: number
}

interface Worker {
    position: string,
    salary: number
}

class Villager {
    public greeting: string = 'Villager say - Hello';

    public greet(): void{
        console.log(this.greeting);
    }
}

const Gosho = new Villager();
Gosho.greet();


type Dog<T> = {
    id: T;
    name: string;
};

const dogSmall: Dog<number> = {id: 1, name: "Gosho"};






