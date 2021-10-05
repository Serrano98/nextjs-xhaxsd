console.log(process.argv);

const option = procces.argv [2]; // opcion
const first_value = procces.argv [3];
const second_value = procces.argv [4];
switch (option){
  case 'sumar':
    console.log(
    `La suma de ${first_value} y ${second_value} es: 
    ${parseInt(first_value) + parseInt(second_value)}`);
    break
  case 'restar':
    console.log( `La Resta de ${first_value} y ${second_value} es: 
    ${parseInt(first_value) - parseInt(second_value)}`);
    break;
};
break;
