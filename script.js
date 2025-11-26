

// // ============== exercice 1======================
// // let storage =localStorage.setItem("name","ali")

// // let getData = localStorage.getItem('name')

// // console.log(getData);


// // ============== Exercice 2 ======================


// const person = { name: "Alex" };
// localStorage.setItem("user", person);
// console.log(localStorage.getItem("user")); // "[object Object]"; not useful!

// // ====================

// localStorage.setItem("user", JSON.stringify(person));
// console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }



// // remove key user 
// localStorage.removeItem("user")


// // vide localstorage

// localStorage.setItem('name',"chouaib")
// localStorage.setItem('prenom',"loubbati")
// localStorage.setItem('age',30)

// console.log(localStorage.getItem('name'));
// console.log(localStorage.getItem('prenom'));
// console.log(localStorage.getItem('age'));



// // afficher les keys 

// for (let i = 0; i < localStorage.length; i++) {
//   const keyName = localStorage.key(i);
//   console.log(keyName);
// }


// // delete all data in localstorage
// localStorage.clear()



// // ============== Exercice 3 ======================



// const joueur = { id: 1, name: "Salah" };
// localStorage.setItem("joueur1", JSON.stringify(joueur));

// const joueurRecup = JSON.parse(localStorage.getItem("joueur1"));
// console.log(joueurRecup.id, joueurRecup.name);

// const joueurs = [
//   { id: 1, name: "Salah" },
//   { id: 2, name: "Amine" },
//   { id: 3, name: "Youssef" }
// ];


// localStorage.setItem("joueurs",JSON.stringify(joueurs))
// let tab = JSON.parse(localStorage.getItem("joueurs"))

// console.log(tab)



// if(tab){
//   const index = tab.findIndex(a => a.id ===2)

//   if (index !== -1) {
//     tab[index].name = "amine est modifiér"
//   }else{
//     console.warn("pas de joueur")
//   }

//   localStorage.setItem("joueurs",JSON.stringify(tab))

// }

// const newTab = JSON.parse(localStorage.getItem("joueurs"))

// console(newTab)



// // ============== Partie 4 :  Mini gestion CRUD (console)======================


// const joueurss = [
//   { id: 1, name: "Salah" },
//   { id: 2, name: "Amine" },
//   { id: 3, name: "Youssef" }
// ];


// // ajouter un joueur

// localStorage.setItem("jou",JSON.stringify(joueurss))

// let a = {id: 4, name: "chouaib"}

// let tabe = JSON.parse(localStorage.getItem("jou")) || []
// tabe.push(a)
// localStorage.setItem('jou',JSON.stringify(tabe))
// const jr = JSON.parse(localStorage.getItem("jou"))

// console.log(jr)

// // suprimer joueur

// const supr = tabe.findIndex(e => e.id === 1);

// if (supr !== -1) {
//   tabe.splice(supr, 1); 
// }

// localStorage.setItem("jou", JSON.stringify(tabe));

// console.log("Après suppression :", JSON.parse(localStorage.getItem("jou")));

// // modifier

// const list = JSON.parse(localStorage.getItem('jou')) || []

// const indx = list.findIndex(e=> e.id === 2)

// if (indx !== -1) {
//   list[indx].name = "modif"
//   localStorage.setItem("jou",JSON.stringify(list))
//   // afficher tout les joueurs
//   console.log("modifier seccuss",list)
// }else{
//   console.warn('pas de joueurs')
// }



