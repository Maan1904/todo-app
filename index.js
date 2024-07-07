const sunBtn = document.querySelector(".image");
const moonBtn = document.querySelector(".moon");

const prag = document.querySelector(".prag");
const card4 = document.querySelector(".card4");
// co card2 = document.querySelector(".card2")

const pop5 = document.querySelector(".pop5");
const pop6 = document.querySelector(".pop6");

const main = document.querySelector(".main");
const bkImg = document.querySelector("#bkimg");
const card = document.querySelector(".card");
const allCards = document.querySelector(".allcards");

const input = document.querySelector(".place");
const inputForm = document.querySelector("#inputform");

let todos = [];
pop5.textContent = `${todos.length} items left
`; ////inta item kuu dhiman kuu shegaa

function lightMode() {
  bkImg.src = "./images/bg-desktop-light.jpg";
  card.style.backgroundColor = "white";
  allCards.style.backgroundColor = " white";
  allCards.style.color = "black";
  // prag.style.color = "black";
  main.style.backgroundColor = "#e3dada";
  sunBtn.style.display = "none";
  moonBtn.style.display = "flex";
  prag.style.color = "black";
  pop5.style.color = "black";
  pop6.style.color = "black";
  card4.style.backgroundColor = "white";
}

function darkMode() {
  moonBtn.style.display = "none";
  sunBtn.style.display = "flex";
  bkImg.src = "./images/bg-desktop-dark.jpg";
  main.style.backgroundColor = "hsl(235, 21%, 11%)";
  card.style.backgroundColor = "hsl(235, 24%, 19%)";
  allCards.style.backgroundColor = "hsl(235, 24%, 19%)";
  allCards.style.color = "white";
  prag.style.color = "white";
  pop5.style.color = "white";
  pop6.style.color = "white";
  card4.style.backgroundColor = "hsl(235, 24%, 19%)";
}

function createTodo(event) {
  event.preventDefault(); //refreshka kaa celinaa.

  let inputValue = input.value; //xogta oo hadaaa qortay oo kuu henaa
  if (inputValue !== "") {
    todos.push(inputValue); // array woxoo ku daraa waxa inputka lugu soo qoray
    allCards.innerHTML = ``; //designka soo labanaayo oo kaa celinaa

    pop5.textContent = `${todos.length} items left
`;

    input.value = ""; //inputka ooo eber kaaga dhigaa
    todos.forEach((currentTodo, index) => {
      const todoCardHTML = `<div class="card2" onclick="makeItCompleted(${index})">
      <div class="allinput">
      <div class="maan"></div>
      <span class="s">${currentTodo}</span>
      </div>
      </div>`;
      allCards.innerHTML += todoCardHTML; // variuble waxaa ku qorto soo muujinaa.
    });
  }
}

function clearAll() {
  todos = []; //array oo eber kaaga dhigaa
  allCards.innerHTML = ""; //cardka oo kaa tirtiraa , mesha oo eber ka dhigaa
  pop5.textContent = `${todos.length} items left
`;
}

function makeItCompleted(index) {
  const todosItem = allCards.querySelectorAll(".card2")[index];
  todosItem.classList.toggle("active");
}
//index kaarka lagu dhuftay aa ku o ganee, aa ku heleee.
sunBtn.addEventListener("click", lightMode);
moonBtn.addEventListener("click", darkMode);
pop6.addEventListener("click", clearAll);
inputForm.addEventListener("submit", createTodo);
