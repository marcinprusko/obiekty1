// plik scripts.js

function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	//dzięki użyciu this, właściwość "marka" obiektu, który stworzymy, przyjmie wartość argumentu marka
	this.cena = cena;
	this.kolor = kolor;
}
Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}

var iPhone6S = new Telefon("Apple", 2250, "srebrny");
var SamsungGalaxyS6 = new Telefon("Samsung", 1500, "czarny");
var MotorolaMotoG3 = new Telefon("Motorola", 2700, "biały");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
MotorolaMotoG3.printInfo();