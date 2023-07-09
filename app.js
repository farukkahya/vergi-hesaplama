const btnRadio1 = document.getElementById('btnradio1');
const vergiOraniInput = document.getElementById('vergi-orani');
const tutarInput = document.getElementById('tutar');
const araToplam = document.getElementById('ara-toplam');
const vergiSpan = document.getElementById('vergi');
const genelToplam = document.getElementById('genel-toplam');
let vergiOrani;

btnRadio1.checked = true;
vergiOraniInput.value = '%1';
vergiOraniInput.disabled = true;
vergiOrani = 1;

// (Net tutar) x (1+ vergi oranı/100)
const calculate = (netTutar, vergiOrani) => {
	return netTutar * (1 + vergiOrani / 100);
}


const isChecked = () => {
	let radioButtons = document.getElementsByName('vergi-oran');
	for (let i = 0; i < radioButtons.length; i++) {
		if (radioButtons[i].checked && radioButtons[i].id !== 'btnradiofree') {
			if (radioButtons[i].value === '1') {
				vergiOraniInput.value = '%1';
				vergiOrani = 1;
			} else if (radioButtons[i].value === '8') {
				vergiOraniInput.value = '%8';
				vergiOrani = 8;
			} else if (radioButtons[i].value === '18') {
				vergiOraniInput.value = '%18';
				vergiOrani = 18;
			}
			vergiOraniInput.disabled = true;
		} else if (radioButtons[i].checked && radioButtons[i].id === 'btnradiofree') {
			vergiOraniInput.value = '';
			vergiOraniInput.disabled = false;
		}
	}
}

tutarInput.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') {
		araToplam.innerHTML = tutarInput.value;
		vergiSpan.innerHTML = `${calculate(tutarInput.value, vergiOrani) - (tutarInput.value)}`
		genelToplam.innerHTML = calculate(tutarInput.value, vergiOrani);
	}
});
