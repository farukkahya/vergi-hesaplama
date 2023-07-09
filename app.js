const btnRadio1 = document.getElementById('btnradio1');
const vergiOraniInput = document.getElementById('vergi-orani');
const tutarInput = document.getElementById('tutar');
const araToplam = document.getElementById('ara-toplam');
const vergiSpan = document.getElementById('vergi');
const genelToplam = document.getElementById('genel-toplam');
let vergiOrani;

// Varsayılan değerler atandı
btnRadio1.checked = true;
vergiOraniInput.value = 1;
vergiOraniInput.disabled = true;
vergiOrani = 1;
tutarInput.focus();

// Vergi oranını alıp vergi tutarını hesaplayan fonksiyon
// (Net tutar) x (1+ vergi oranı/100)
const calculate = (netTutar, vergiOrani) => {
	return netTutar * (1 + vergiOrani / 100);
}

// radio buttonların seçili olup olmadığını kontrol ederek inputları dolduran fonksiyon
const isChecked = () => {
	let radioButtons = document.getElementsByName('vergi-oran');
	for (let i = 0; i < radioButtons.length; i++) {
		if (radioButtons[i].checked && radioButtons[i].id !== 'btnradiofree') {
			vergiOraniInput.value = radioButtons[i].value;
			vergiOraniInput.disabled = true;
			tutarInput.focus();
		} else if (radioButtons[i].checked && radioButtons[i].id === 'btnradiofree') {
			vergiOraniInput.disabled = false;
		}
	}
}

// inputların değerlerini kontrol ederek hesaplanan değerleri göstermek için keyup eventi eklenmiştir
tutarInput.addEventListener('keyup', (e) => {
	if (e.key === 'Enter')/* Basılan tuş Enter ise*/ {
		vergiOrani = Number(vergiOraniInput.value);
		araToplam.innerHTML = tutarInput.value;
		vergiSpan.innerHTML = `${calculate(tutarInput.value, vergiOrani) - (tutarInput.value)}`
		genelToplam.innerHTML = calculate(tutarInput.value, vergiOrani);
	}
});
