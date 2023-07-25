
var isim = prompt("Adınız nedir?", "");
console.log("Merhaba, " + isim);

function showTime() {
    var saatDiv = document.getElementById("myClock");
    var tarih = new Date();
  
    var saat = tarih.getHours().toString().padStart(2, "0");
    var dakika = tarih.getMinutes().toString().padStart(2, "0");
    var saniye = tarih.getSeconds().toString().padStart(2, "0");
  
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var gun = gunler[tarih.getDay()];
  
    var zaman = `${saat}:${dakika}:${saniye}, ${gun}`;
  
    saatDiv.innerHTML = zaman;
  
    setTimeout(showTime, 1000); // Her 1 saniyede bir güncelle
  }
  
  showTime();
  