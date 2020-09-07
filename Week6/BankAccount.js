'use strict';



class BankAccount {
// accountNumber;
// owner;
// transactions;

constructor(accountNumber, owner){
this.accountNumber = accountNumber;
this.owner = owner;
this.transactions = [];

}
balance(){
let sum = 0;
//loop through every transaction and get the amount of it,
//and add up this amount to the sum variable
for (let i = 0; i < this.transactions.length; i++){
    let currentTransaction = this.transactions[i];
    sum += currentTransaction.amount;
}
return sum;
};
deposit(amount){
   if(amount > 0){
let deposit = new Transaction(amount, 'me');
this.transactions.push(deposit);
}
//You cannot deposit a negative amount

}
charge(amount, payee){

//CANNOT charge any amount that would dip account below zero
    if(this.balance() < amount){
        return
    }
    let charge = new Transaction(-amount, payee)
    this.transactions.push(charge)
}


};

class Transaction {
// date;
// amount;// positive amounts are money going into the account. Negative is money coming out
// payee;

constructor(amount, payee){
//the date should be set to the current date automatically
this.date = new Date();
this.amount = amount;
this.payee = payee;
}
};

let acct1 = new BankAccount(123, 'john smith');
console.log(acct1)

acct1.deposit(100);
acct1.charge(50)
console.log(acct1.balance());


const assert = require('assert');

// describe("Test 1", function(){
//     it("Should let you deposit a positive amt", function(){
//         let acct1 = new BankAccount('123', "Matt");
//         acct1.deposit(100)
//         assert.equal(100, acct1.balance())
//     })
//     it("Should let you charge a negative amt", function(){
//         let acct1 = new BankAccount('123', "Matt");
//         acct1.deposit(100)
//         acct1.charge(50)
//         assert.equal(50, acct1.balance())
//     })
// })