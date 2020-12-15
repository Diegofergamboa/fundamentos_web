
var nameuser = "john";

let lastname = "Carter"; /* Esta es otra manera de guardar la variables */

/*Esto si es let o cons o var se usa por los alcances de las variables */

/*El valor que se cambia de variable a variable es una propiedad diferente */


/*El uso de los switch van de la mano con un tipo de condicionantes en el que se pueden aplicar distintos tipos de valores */

console.log('Welcome to the card assistant, type your I.D. card.')
let typecard = prompt('card account I.D.: ')


switch (typecard) {
    case (51 || 52) :
        console.log(`Your card I.D. ${typecard} belongs to a VISA Card.`);
        break;
    case (53 || 54) :
        console.log(`Your card I.D. ${typecard} belongs to a MASTERCARD Card.`);
        break;
    case (55) :
        console.log(`Your card I.D. ${typecard}) belongs to AMERICAN EXPRESS. `);
        break;
    default:
        console.log(`${typecard}, isn´t exist or is a invalid number`);
        break;
        
}
/*El uso de los breaks es importante para que cambie entre todos los casos existentes */
