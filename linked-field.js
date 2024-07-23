const departements = {
  centre: [
    "Lékié",
    "Vina",
    "Mefou et Afamba",
    "Mefou et Akomo",
    "Nyong Ekélé",
    "Nyong et so'o",
    "Mbam et Kim",
    "Mbam et Inoubou",
    "Haute-Sanaga",
  ],
  littoral: ["Wouri", "Sanaga-Maritime", "Moungo", "Nkam"],
  adamaoua: ["Djérem", "Vina", "Mbéré", "Mayo-Banyo", "Fako et Déo"],
  ouest: [
    "Mifi",
    "Nkoung-Khi",
    "Ndé",
    "Menoua",
    "Haut-Plateaux",
    "Haut-Nkam",
    "Bamboutos",
    "Noun",
  ],
  nord: ["Bénoué", "Faro", "Mayo-Louti", "Mayo-Rey"],
  nord_ouest: [
    "Boyo",
    "Bui",
    "Ngo-Ketundjang",
    "Menoua",
    "Donga-Mantung",
    "Mezam",
    "Menchum",
    "Momo",
  ],
  sud: ["Mvila", "Océan", "Dja et Lobo", "Vallée du Ntem"],
  sud_ouest: ["Koupé-Manengouba", "Fako", "Lébialem", "Manyu", "Mémé", "Ndian"],
  extreme_nord: [
    "Diamaré",
    "Logone et Chari",
    "Mayo-Danay",
    "Mayo-Kani",
    "Mayo-Sava",
    "Mayo-Tsanaga",
  ],
  est: ["Haut-Nyong", "Kadey", "Lom et Djérem", "Boumba et Ngoko"],
};

function yourChoice() {
  const region = document.getElementById("region");
  const dep = document.getElementById("dep");
  const selectRegion = region.value;
// on vide 
dep.innerHTML = "";
departements[selectRegion].forEach((departement) => {
  
  const option = document.createElement("option");
  option.value = departement;
  option.textContent = departement;
  dep.appendChild(option);

});
}
yourChoice();

function yourResult(){
  const region = document.getElementById("region");
  const dep = document.getElementById("dep");
  var result = document.getElementById("result");

  const selecRegion = region.value;
  const selectDep = dep.value;

  result.textContent = "Vous êtes bien évidemment de la région de : " + selecRegion + " principalement du département du : " + selectDep;
}


// //tableaux d'objects

// var myFonction = function checkRegion(regions, departements){};
// region.onchange = function checkRegion() {};

// region.addEventListener("change", (e) => {
//   checkRegion();
// });

// function checkRegion(regions, departements) {
//   //   const result = document.getElementById("display_dep");
//   for (var i = 0; i < regions.length; i++) {
//     if (regions[i].code.selectedIndex === departements[i].region_id) {
//       document.getElementById("display_dep").innerHTML = departements[i];
//       departements[i].style.visibility = "visible";
//       return result();
//     }
//   }
// }
