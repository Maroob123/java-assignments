document.write("14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:<br> a. Customer Name<br> b. Current Month <br> c. Number of units <br> d. Charges per unit <br> e. Net Amount Payable (within Due Date)<br> f. Late Payment Surcharge<br> g. Gross Amount Payable (after Due Date)");

var customer_name = prompt("Making Your K-Electric Bill" + "\n" + "Enter Customer name");
var current_month = prompt("Making Your K-Electric Bill" + "\n" + "Enter Current Month Name");
var no_of_units = prompt("Making Your K-Electric Bill" + "\n" + "Enter Number of Units");
var charge_per_unit = prompt("Making Your K-Electric Bill" + "\n" + "Enter Sharge Per Unit");
var net_amount_payble = no_of_units * charge_per_unit;
var late_payment_surcharge = 350;
net_amount_payble = Number(net_amount_payble);
var gross_amount_payble = net_amount_payble + late_payment_surcharge;

document.write("<h1>K-Electric Bill</h1>", "<br><br>Customer Name : ", customer_name, "<br> Month : ", current_month, "<br>Number of Units : ", no_of_units, "<br>Charges per unit : ", charge_per_unit, "<br><br>Net Amount payble (With in due date) : ", net_amount_payble, "<br>Late Payment sercharge : ", late_payment_surcharge, "<br>Gross Amount Payble (After Due Date) : ", gross_amount_payble);