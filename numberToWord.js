


/*********** Yardımcı Fonksiyonlar *********/

function ucHaneAyir(sayi){
	var sayiDizisi= [];
	while(sayi!=0){
		var ss= sayi.toString();
		if(ss.length<3){
			sayiDizisi.push(ss);
		}else{
			sayiDizisi.push(ss.substr(ss.length-3));
		}
		sayi = parseInt(ss.substring(0,ss.length-3));
		if(isNaN(sayi)){sayi=0}
	}
	return sayiDizisi;
}

function ucHaneliYaziyaCevir(sayi){

	//rakam okunuşlarının tanımları
	var birler = ["sıfır","bir","iki","üç","dört","beş","altı","yedi","sekiz","dokuz"];
	var onlar = ["","on","yirmi","otuz","kırk","elli","altmış","yetmiş","seksen","doksan"];

	var bolum=0;
	var sayininOkunusu = "";

	 // Yüz
	 bolum = parseInt(sayi / 100); 
	if ((sayi % 100) != sayi)
	{
	    if (bolum == 1)
	        sayininOkunusu += "yüz";
	    else
	        sayininOkunusu += birler[bolum] + "yüz";
	    sayi %= 100;
	}

	//On
	bolum =  parseInt(sayi / 10); 
	if ((sayi % 10) != sayi)
	    sayininOkunusu += onlar[bolum];
	sayi %= 10;

	// Bir
	bolum =  parseInt(sayi / 1); 
	if ((sayi % 1) != sayi)
	    sayininOkunusu += birler[bolum];
	sayi %= 1;

	return sayininOkunusu;
}


/******************* Ana Fonksiyon **************************/
function sayiyiYaziyaCevir(sayi){
	sayi = parseInt(sayi);
	var basamakDegerListesi = ["","bin","milyon","milyar","trilyon","katrilyon"];
	var haneDizisi = ucHaneAyir(sayi);	
	var yaziKarsilik = "";
	for (var i = haneDizisi.length-1 ; i>=0 ; i--) {
		var gecerliDeger = haneDizisi[i];

		//bir bin seklinde bir ifade olmasın..
		if(gecerliDeger == 1 && i == 1){
			yaziKarsilik += basamakDegerListesi[i];
		}else{
			yaziKarsilik += ucHaneliYaziyaCevir(gecerliDeger) + basamakDegerListesi[i];
		}		
	}
	return yaziKarsilik;
}

/*Kullanım: sayiyiYaziyaCevir(1234567) => "birmilyonikiyüzotuzdörtbinbeşyüzaltmışyedi";
*/


