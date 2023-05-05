const btnAdd = document.getElementById("btnAdd");
const input = document.getElementById("inputAdd");
const divAffichage = document.getElementById("affichage");
btnAdd.addEventListener("click", () => {
  divAffichage.innerHTML = input.value;
});
