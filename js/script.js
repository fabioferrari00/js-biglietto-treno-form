//dichiarazione variabili

const calcTicket = document.getElementById('calc-ticket');

calcTicket.addEventListener('click', function (e) {
  e.preventDefault();

  //prendo i valori inseiriti nella form e li assegno a delle variabili dichiarate dopo il click
  const name = document.getElementById('name').value;
  const km = document.getElementById('km').value;
  const age = document.getElementById('age').value;

  console.log(name, km, age);


})