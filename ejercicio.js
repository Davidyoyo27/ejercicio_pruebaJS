// 1-. que todo esto es una matriz de 5x5
// 2-. para recorrer un array dentro de otro array o un array bidimencional, se usa un for dentro de otro for
// 3-. se debe crear una array en el cual se ingresaran los valores correspondientes a la matriz de 5x5, o un array que contiene otros arrays

// 4-. para la suma de las diagonales principales (101) se debera recorrer los array contenidos en el array principal y este tomara el primer valor
// del primer array, al pasar al segundo se le sumara 1, osea contador_positivo+1 para que tome en el siguiente array el siguiente valor, osea la segunda posicion, 
// y de esta misma manera para el siguiente array, tomando en cuenta que ahora para el tercer array el contador_positivo+1 al haber tomado la segunda posicion 
// (por el segundo array) ahora con el +1 seria la tercera posicion, y asi hasta completar los 5 array que contiene la variable array para 
// posteriormente tomar cada uno de los valores rescatados de cada array y sumarlos, de esta manera se obtendria la suma de la primera diagonal,
// esto es posible al ser una matriz proporcional, osea 5x5, si fuese una matriz desproporcional 5x4 por ejemplo no podria obtenerse el mismo resultado

// 5-. inicializar las variables "contador_positivo" y "contador_negativo" que seran los contadores a usar para determinar la posicion de cada uno de los elementos que estan contenidos
// dentro del array, para que luego dentro del for este vaya sumando +1 al terminar una vuelta del ciclo y el contador permita avanzar a la siguiente
// posicion del array del siguiente array, esto tomaria como resultado los valores correspondientes a la primera diagonal principal [21,7,1,3,13]. Para 
// tomar los valores de la siguiente diagonal deberia ser lo mismo pero al reves, en este caso vendria siendo usar el siguiente contador mencionado "contador_negativo" 
// para recorrer el array pero en este caso al reves

// 6-. se crea las variables globales(valor_primera_diag y valor_segunda_diag) que almacenaran el valor de la suma del resultado obtenido en el ciclo for, 
// que corresponde a las diagonales principales

// 7-. a la hora de obtener el resultado de la suma de las diagonales principales esta al mostrar 2 veces el numero central (1) se sumaria el mismo valor
// nuevamente por error, lo que ocasionaria un resultado erroneo, por lo cual para poder reconocer ese valor central primero se debe determinar si la
// matriz es par o impar, ya que al ser IMPAR este si posee un array central con un valor en el centro que es el valor que se repetira a la hora de 
// realizar el calculo de las diagonales principales, si en su defecto el array principal es PAR este no tendra un array central y por ende un valor 
// central el cual se repetira a la hora de realizar la suma de las diagonales principales. Conclusion: es necesario determinar si el array principal es par o impar

// 8-. para identificar si es par o impar simplemente creo un condicional if el cual preguntara el valor de la variable al que se le aplicara el modulo(%)
// para ver su resultado, si este es igual a 0, seria par, ya que el resto de todo numero par es 0, en su defecto si el resultado de esa operacion no es 0 
// seria impar, que significa que el resto de esa operacion fue distinto de 0. 

// 9-. una vez determinado si el array es par o impar ahora se debe determinar cual es el valor central de dicho array de datos, para obtener estos datos
// se debe saber el largo del array y despues divirlo en 2, de esta manera se obtiene un valor y ese valor se trunca a su valor entero para que este no sea
// decimal, este resultado final seria la posicion del elemento central del array, a la cual finalmente se restaria si es que llegase a ser un array impar.

// array contenedor de la matriz 5x5
// reemplazar con la matriz que se desee obtener sus diagonales
//     ↓↓↓
const array = [[21,22,23,24,25],[20,7,8,9,10],[19,6,1,2,11],[18,5,4,3,12],[17,16,15,14,13]];
// const array = [[21,22,23,24],[20,7,8,9],[19,6,1,2],[18,5,4,3]]; //este es un array par sin numero central de ejemplo

// inicializacion de variables
let contador_positivo = 0;
let contador_negativo = array.length-1;
let valor_primera_diag = 0;
let valor_segunda_diag = 0;
let val_array = [];
let largo_array = array.length;

// determinar el valor central del array
let dividir_array = Math.trunc((array.length)/2);
let valor_central = array[dividir_array][dividir_array];

// ciclo para recorrer el array
for (let index = 0; index < array.length; index++) {
    const element = array[index];

    val_array = element[contador_positivo];
    valor_primera_diag = valor_primera_diag + element[contador_positivo];
    valor_segunda_diag = valor_segunda_diag + element[contador_negativo];

    contador_positivo = contador_positivo + 1;
    contador_negativo = contador_negativo - 1;
}
// variable con la suma de las diagonales principales
let resultado = (valor_primera_diag + valor_segunda_diag);

// determinaremos si el array es par o impar
if(!((largo_array % 2) == 0)){
    // resultado de la suma de las diagonales restando el valor central al ser un array impar
    resultado = resultado - valor_central;
}

// mostrar el resultado final por consola
console.log(resultado);
