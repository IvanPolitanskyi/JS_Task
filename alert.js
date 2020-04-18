var username = prompt('Как тебя зовут?', 'Впиши своё имя сюда !!!');  

var yearA = prompt('В каком году ты родился?', 'Да, да, и год рождения тоже'); 

var yearB = new Date().getFullYear()

var age = yearB - yearA;

alert ('Привет '+ username + ', ' + age);
