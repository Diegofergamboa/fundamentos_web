
// document.write sirve para escribir en el HTML
//on load es muy bueno, ya que es del HTML pero basicamente lo que permite 
// es poder generar en el codigo lo que primero salga en el HTML.

// document.write("Hola mundo");

var minutes = 1;

function seconds(minutes) {
    return minutes * 60;
}
seconds()

// Que bueno es la funcion de array para aplicar a los tipos de datos que son por ejemplo 1:30 (un minuto 30 segundos a segundos)


// Primero se va a usar el mètodo .split() el cual divide una array por un separadro especifico
// Si una cadena vacía ("") se utiliza como separador, la cadena se divide entre cada carácter.
// split(separador / limite);



function covert(time, minutes) {
    var parts = time.split(":"),
     		minutes = +time[0],
    		seconds = +time[1];
    return console.log(minutes * 60 + seconds).toFixed(3);
}
convert(1:30)
