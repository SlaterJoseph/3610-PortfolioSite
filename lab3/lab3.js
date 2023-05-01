const weightInput = document.getElementById('weight');
const kilogramsRadio = document.getElementById('kilograms');
const poundsRadio = document.getElementById('pounds');
const resultDiv = document.getElementById('result');

let weight = parseFloat(localStorage.getItem('weight')) || 0;
let unit = localStorage.getItem('unit') || 'kg';

weightInput.value = weight;
if (unit === 'kg') {
	kilogramsRadio.checked = true;
} else {
	poundsRadio.checked = true;
}

function calculate() {
	weight = parseFloat(weightInput.value);

	if (kilogramsRadio.checked) {
		// Convert kilograms to pounds
		resultDiv.textContent = `${weight} kilograms is ${weight * 2.20462} pounds.`;
		unit = 'kg';
	} else {
		// Convert pounds to kilograms
		resultDiv.textContent = `${weight} pounds is ${weight / 2.20462} kilograms.`;
		unit = 'lb';
	}

	localStorage.setItem('weight', weight);
	localStorage.setItem('unit', unit);
}
