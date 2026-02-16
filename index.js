/**
1) Quali sono i tipi primitivi principali in TypeScript?

    string, number, boolean, undefined, any

    Da notare: number racchiude sia intero che float.

2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
*/
// domanda: identificatore "name" già occupato
var myName = "Giuseppe";
var age = 29;
var isStudyingTypescript = true;
/**
 *
 *

3) Tipizza il parametro della seguente funzione:
const greet = (name) => { return "Ciao " + name }

*/
var greet = function (name) {
    return "Ciao " + name;
};
/*

4) Specifica il tipo di ritorno della seguente funzione:
const sum = (a: number, b: number) => { return a + b }

*/
var sum = function (a, b) {
    return a + b;
};
/*

5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.{

*/
var addIva = function (num, ivaPercentage) {
    // iva on a scale 0 to 1
    var ivaScaled = ivaPercentage / 100;
    // the calculated iva: 72 * 0.22
    var ivaNum = num * ivaScaled;
    // the original number + calculated iva: example: 72 + (72 * 0.22)
    var finalNum = num + ivaNum;
    return finalNum;
};
/*

6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

*/
var concatenateStrings = function (s1, s2) {
    return s1.length + s2.length;
};
/*

7) Cos'è un Type Union e come si scrive?

    Sia x una variabile, si definisce X il tipo di x, dove X è l'unione (OR logico)
    di [X1, X2... XN], dove XN è un tipo, una Type Union o un valore letterale.
    In breve, una Type Union è l'unione di N elementi (con N > 0), che a loro volta possono essere
    tipi semplici, Type Union o valori letterali.
    La sintassi formale di Type Union è:
        type union X = <operando> <operatore?>
        dove:
            operando: è un tipo, una Type Unione o un valore letterale
            operatore: OR. l'OR, ovviamente, non esiste per l'ultimo operando

    Ad esempio, se la variabile x ha tipo X, e X è la Type Union
    di Y, Z, T, allora si definisce con il seguente pseudo codice:

    type union X = Y OR Z OR T
    variabile x: X = valore

    Un esempio in TypeScript:
    

    type WorkWeekDay = "monday" | "tuesday" | "wednesday" | "thursday" | "friday"
    type WeekendDay = "saturday" | "sunday"
    type WeekDay = WorkWeekDay | WeekendDay

    let myBestDay: Weekday = "monday"


8) Crea una variabile che possa contenere un numero, null o undefined.

*/
var numberOrElse = null;
numberOrElse = 23;
numberOrElse = undefined;
/*


10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3]
*/
// const numbers: number[] = [1, 2, 3]
var numbers = [1, 2, 3];
/*


11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

*/
var myTuple = ["giuseppe", "hello", "car", 234, 3];
var studente1 = {
    nome: "Giuseppe",
    voto: 100
};
var studente2 = {
    nome: "Maria",
    voto: 100
};
// const studenti: Studente[] = [studente1, studente2]
// domanda: la sintassi Array<Studente> fa uso di un generics?
var studenti = [studente1, studente2];
/*

17) Crea un oggetto che implementi l'interfaccia Auto.

*/
var auto1 = {
    modello: "Fiat",
};
/*

18) Cosa sono i Generics in TypeScript?
19) È possibile avere più tipi generici in un'interfaccia?
20) Crea un'interfaccia generica per una risposta API.
 *
 */
