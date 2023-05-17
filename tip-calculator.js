function myFunction() {
  // read the input bill amount value
  const billAmount = document.querySelector("#billAmount");

  //read the input percentage value
  const tipPercentage = document.querySelector('#tipPercentage');

  //get the bill amount
  const bill = parseFloat(billAmount.value);

  // get the percentage value
  const percentage = parseFloat(tipPercentage.value);

  // calculate the percentage amount
  const percentageAmount = (percentage / 100) * bill;

  // calculate total bill
  const totalBill = bill + percentageAmount;

  // format the percentage amount
  percentageAmountFormate = Math.floor(percentageAmount * 100) / 100;

  // round the total bill

  totalBillRounded = Math.round(totalBill * 100) / 100;

  // query 
  const tip = document.querySelector("#display");

  tip.innerHTML = "You tipped " + "$" + percentageAmountFormate + "<br/>" +
    "Your total bill is : " + "$" + totalBillRounded;
}
