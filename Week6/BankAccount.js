'use strict';

class BankAccount {
accountNumber;
owner;
transactions;

constructor(accountNumber, owner){
this.accountNumber = accountNumber;
this.owner = owner;
this.transactions = [];

}
balance(){
//returns current amt
//the balance is computed by summing in the transactions array

//before we start set the sum to be 0
let sum = 0;

//loop through every transaction and get the amount of it,
//and add up this amount to the sum variable
for (let i = 0; i < this.transactions.length -1; i++){
let currentTransaction = this.transactions[i];
sum += currentTransaction.amount;
}
return sum;
};
deposit(amt){
let newTrans = new Transaction(amt, 'me');
this.transactions.push(newTrans);

//You cannot deposit a negative amount!!!!

}
charge(payee, amt){

//CANNOT charge any amount that would dip account below zero

}


};

class Transaction {
date;
amount;// positive amounts are money going into the account. Negative is money coming out
payee;

constructor(amount, payee){
//the date should be set to the current date automatically
this.date = new Date();
this.amount = amount;
this.payee = payee;
}
};
let acct1 = new BankAccount(123, 'john smith');
acct1.deposit(100);
console.log(acct1);
acct1.deposit(200);
console.log(acct1);