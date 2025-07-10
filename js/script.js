//dichiarazione variabili

const calcTicket = document.getElementById('calc-ticket');

calcTicket.addEventListener('click', function (e) {
  e.preventDefault();

  //prendo i valori inseiriti nella form e li assegno a delle variabili dichiarate dopo il click
  const name = document.getElementById('name').value;
  const km = document.getElementById('km').value;
  const age = document.getElementById('age').value;



  let price = 0.21 * km;
  let discount = '';

  if (age == 'u') {
    price = price * 0.8;
    discount = 'Sconto del 20%';
  } else if (age == 'o') {
    price = price * 0.6;
    discount = 'Sconto del 40%';
  } else {
    discount = 'Biglietto standard';
  }


  document.getElementById('show-name').innerText = name;
  document.getElementById('show-discount').innerText = discount;
  document.getElementById('show-price').innerText = price.toFixed(2) + '€';

})