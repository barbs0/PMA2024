let povrce1 = {
    naziv: "Brokula",
    sastav: "Brokula",
    kalorijskaVrijednost: 50,
    tezina: 0.2,
    opis: "zeleno povrce sa cvjetovima",
    volimHranu: true,
    nutritivneInfo: {
      proteini: 5,
      masti: 1,
      ugljikohidrati: 10
    },
    specifikacije: {
      boja: "zelena",
      tekstura: "hrskava"
    }
} 

  let povrce2 = {
    naziv: "Karota",
    sastav: "Karota",
    kalorijskaVrijednost: 60,
    tezina: 0.3,
    opis: "narančasto povrće",
    volimHranu: true,
    nutritivneInfo: {
      proteini: 6,
      masti: 2,
      ugljikohidrati: 20
    },
    specifikacije: {
      boja: "narančasta",
      tekstura: "hrskava"
    }
}

  let povrce3 = {
    naziv: "Krumpir",
    sastav: "Krumpir",
    kalorijskaVrijednost: 10,
    tezina: 0.1,
    opis: " trajna zeljasta biljka",
    volimHranu: false,
    nutritivneInfo: {
      proteini: 6,
      masti: 1,
      ugljikohidrati: 30
    },
    specifikacije: {
      boja: "žućkasto-bijelo-zelenkasta",
      tekstura: "hrskava"
    }
}

let nizPovrca = [povrce1,povrce2,povrce3];
console.log(nizPovrca);
console.log("hello")

import { pozdraviOsobu } from "./MunjizaBarbara_modul_v08"; 
let poruka = pozdraviOsobu("andela")
console.log(poruka);