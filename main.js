// stampo numeri

for (var i = 1; i <= 100; i++) {

  if ((i%3 == 0) && (i%5 == 0)) {
    console.log('FizzBuzz');
    document.getElementById('lista').innerHTML += '<li>' + 'FizzBuzz' + '</li>';
  } else if (i%5 == 0) {
    console.log('Buzz');
    document.getElementById('lista').innerHTML += '<li>' + 'Buzz' + '</li>';
  } else if (i%3 == 0) {
    console.log('Fizz');
    document.getElementById('lista').innerHTML += '<li>' + 'Fizz' + '</li>';
  } else {
    console.log(i);
    document.getElementById('lista').innerHTML += '<li>' + i + '</li>';
  }
}
