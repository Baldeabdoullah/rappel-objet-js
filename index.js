const obj = {
  pseudo: "From scratch",
  ville: "Bordeaux",
  admin: false,
  direBonjour: function () {
    console.log("bonjour je suis " + this.pseudo);
  },
  //   direBonjour() {
  //     console.log("bonjour je suis " + obj.pseudo);
  //   },
};

// Ajouter
obj.age = 24;
obj["admin"] = true;

//Modifier
obj.pseudo = "Fs";

//supprimer
// delete obj.ville;

// obj.age = 32;
// console.log(obj);

// checker si une propriete existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//Parcourir un objet
for (const key in obj) {
  //console.log(key + " : " + obj[key]);
}

console.log(obj.direBonjour());
