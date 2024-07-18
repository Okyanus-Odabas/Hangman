const word_e1 = document.getElementById("word");
const error = document.getElementById("error");
const hatali = document.getElementById("hatali2");
const item = document.querySelectorAll(`.item`);

function getRandomWords() {
  const words = [
    "merhaba",
  "kitap",
  "ev",
  "bilgisayar",
  "yazılım",
  "okul",
  "kahve",
  "sabah",
  "akşam",
  "hafta",
  "ay",
  "yıl",
  "saat",
  "dakika",
  "saniye",
  "öğrenci",
  "öğretmen",
  "yönetici",
  "müdür",
  "hastane",
  "doktor",
  "hasta",
  "eczane",
  "ilaç",
  "alışveriş",
  "alışkanlık",
  "günlük",
  "haftalık",
  "aylık",
  "yıllık",
  "mutfak",
  "banyo",
  "yatak",
  "salon",
  "oda",
  "kapı",
  "pencere",
  "sandalye",
  "masa",
  "kalem",
  "defter",
  "silgi",
  "kırtasiye",
  "televizyon",
  "uzaktan",
  "kumanda",
  "internet",
  "telefon",
  "müzik",
  ];
  return words[Math.floor(Math.random() * words.length)];
}
yeni = getRandomWords();

let dogruHarfler = [];
function divEkle() {
  for (let i = 0; i < yeni.length; i++) {
    let mrb = `yeniDiv${[i]}`;
    mrb = document.createElement("div");
    word_e1.appendChild(mrb);
    mrb.classList.add("letter");
    dogruHarfler.push(mrb);
  }
}
divEkle();

let yanlisSayisi = 0;

document.addEventListener("keydown", function bas(e) {
  let harfEklendi = false;
  var basilanTus = e.key;

  for (i = 0; i < yeni.length; i++) {
    if (basilanTus == yeni[i]) {
      dogruHarfler[i].textContent = basilanTus;
      harfEklendi = true;
    }
  }

  console.log(yeni.length); //7

  let bitti = [];

  for (i = 0; i < yeni.length; i++) {
    if (dogruHarfler[i].textContent == yeni[i]) {
      bitti.push(yeni[i]);
    }
  }
  if (bitti.length == yeni.length) {
    alert("Kazandın. Cevap: " + yeni);
    this.location.reload();
  }

  if (basilanTus.match(/[a-zA-ZığüşıöçĞÜŞİÖÇ]/i)) {
    var basilanTus = e.key;

    if (harfEklendi !== true) {
      if (!hatali.textContent.includes(basilanTus)) {
        hatali.textContent += ` ${basilanTus} ,`;

        item[yanlisSayisi].style.visibility = `visible`;

        yanlisSayisi++;
      }
      if (yanlisSayisi == "6") {
        alert(`Kaybettin. Doğru cevap: ${yeni}`);
        this.location.reload();
      }
    }
  }
});
