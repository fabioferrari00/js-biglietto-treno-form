//dichiarazione variabili

const calcTicket = document.getElementById('calc-ticket');

calcTicket.addEventListener('click', function (e) {
  e.preventDefault();

  //prendo i valori inseiriti nella form e li assegno a delle variabili dichiarate dopo il click
  const name = document.getElementById('name').value;
  const km = document.getElementById('km').value;
  const age = document.getElementById('age').value;

  let discount = 0;
  let price = 0.21 * km;

  if (age < 18) {
    discount = price * 20 / 100;
  } else if (age > 65) {
    discount = price * 40 / 100;
  }
  price = price - discount;
  console.log(price.toFixed(2));

})