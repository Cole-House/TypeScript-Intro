//annotation types can set all the primitive types of data and infer data types from initialization
//Union Types works like so fisrtType | secondType
var myName = null;
myName = 'Cole';
//Using Array Type Annotation
var items = ['jurassic', 'park'];
;
var account = {
    name: 'Louis',
    balance: 100
};
//this tells TS that this will accept array of acount objects 
var accounts;
//classes implement othe superclasses or interfaces and operate similarly to JS classes
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () {
    };
    return InvestmentAccount;
}());
