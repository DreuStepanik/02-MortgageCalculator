// Create a function that will be called when the user clicks on the button element you added to your HTML. This function should grab the values entered by the user from the input elements and the select element. The function should then calculate the monthly payment as follows (we can break this formula into 4 'buckets' for readability): // 
// Loan balance
$("#buttonSubmit").click(function() {
	var loanBalance = $("#balance").val();
	var annualRate = $("#rate").val();
	var loanTerm = $("#term").val();
	var period = $("#period option:selected").val();

// number of payments (360)
	var numberOfPayments = loanTerm * period;

// monthly interest rate (~0.0033)      
	var monthlyInterestRate = (annualRate / 100) / period;

// compounded interest rate (~3.31)
	var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);

// interest quotient (~0.004)
	var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

// final calculation rounded to two decimal places ($1432.25)
	var monthlyPayment = Math.round((loanBalance * interestQuotient) * 100) / 100;

	$("#calculatedMortgage").text("Your monthly mortgage rate will be " + "$" + monthlyPayment + " dollars");
});