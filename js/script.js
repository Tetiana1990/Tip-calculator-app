const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTip = document.getElementById('customTip');
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');
const resetBtn = document.getElementById('reset');
const peopleError = document.getElementById('peopleError');
const peopleWrapper = peopleInput.closest(".input-wrapper");

let tipPercent = 0;


function calculate(){
	const bill = parseFloat(billInput.value);
	        const peopleValue = peopleInput.value;
	const people = parseInt(peopleInput.value) || 1;

	if( peopleValue === "0") {
			peopleError.textContent = "Can't be zero";
			peopleWrapper.classList.add("input-error");
			tipAmount.textContent = "$0.00";
		totalAmount.textContent = "$0.00";
	return;
		}else{
			peopleError.textContent = "";
			peopleWrapper.classList.remove("input-error");
			
		}
	
if(!bill || !tipPercent ) return;
	const tipTotal = (bill * tipPercent) / 100;
	
	const tipPerPerson =  tipTotal / people;
	const totalPerPerson = (bill + tipTotal) / people;

tipAmount.textContent = 
	`$${tipPerPerson.toFixed(2)}`;
	totalAmount.textContent = 
	`$${totalPerPerson.toFixed(2)}`;
}

tipButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		tipButtons.forEach(b =>
			b.classList.remove('active'));
			btn.classList.add('active');
			
			customTip.value = "";
			tipPercent = parseFloat(btn.dataset.tip);
			calculate();
	});
});
customTip.addEventListener('input', () =>
{
	tipButtons.forEach(b => 
		b.classList.remove('active'));
		tipPercent = parseFloat(customTip.value)
		|| 0;
		calculate();
});
billInput.addEventListener('input', calculate);
peopleInput.addEventListener('input', calculate);

resetBtn.addEventListener('click', () => {
	billInput.value = "";
	peopleInput.value = "";
	customTip.value = "";
	tipPercent = 0;
	tipButtons.forEach(b => 
		b.classList.remove('active'));
		tipAmount.textContent = "$0.00";
		totalAmount.textContent = "$0.00";
		peopleError.textContent = "";
		peopleWrapper.classList.remove("input-error");



		
});

