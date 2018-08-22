function BankAccount (Name, initialDeposit, depositAmount, withdrawalAmount) {
  this.Name = Name;
  this.initialDeposit = parseFloat(initialDeposit);
  this.depositAmount = parseFloat(depositAmount);
  this.withdrawalAmount = parseFloat(withdrawalAmount);
  };

 BankAccount.prototype.balance = function() {
   return this.initialDeposit + this.depositAmount - this.withdrawalAmount
 };

 function isNotNumber(string) {
   var regex = /[^0-9.]/;
   return regex.test(string);
 }

function realNumber (input) {
  if (isNotNumber(input)) {
    return input = 0;
  } else {
    return input;
  }
}

$(document).ready(function(){
  $("form#bank").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = realNumber ( parseFloat($("input#initial-deposit").val()).toFixed(2));

    var inputtedDepositAmount = realNumber ( parseFloat($("input#deposit-amount").val()).toFixed(2));

    var inputtedWithdrawalAmount = realNumber ( parseFloat($("input#withdrawl-amount").val()).toFixed(2));

    var newBankAccount = new BankAccount (inputtedName, inputtedInitialDeposit, inputtedDepositAmount, inputtedWithdrawalAmount);
    console.log(newBankAccount)
    $("#displayBalance").text(newBankAccount.balance())


    $("#displayBalance").text(this.balance);
  })

})
