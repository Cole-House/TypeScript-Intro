//annotation types can set all the primitive types of data and infer data types from initialization
//Union Types works like so fisrtType | secondType
let myName: string | null = null; 
myName = 'Cole';

//Using Array Type Annotation
let items: string[] | number[] = ['jurassic', 'park'];

interface IAccount{
    name: string,
    balance: number,
    status?: string, //? signifies optional property
    deposit?: () => void // you can even set the param and return types of functions in the interface
};

const account: IAccount = {
    name: 'Louis',
    balance: 100
};

//this tells TS that this will accept array of acount objects 
let accounts: IAccount[];
//classes implement othe superclasses or interfaces and operate similarly to JS classes
class InvestmentAccount implements IAccount {
    constructor (
        public name, public balance
    ) {

    }
    private withdraw() {

    }

}