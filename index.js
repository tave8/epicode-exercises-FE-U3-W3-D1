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
    di [X1, X2... XN], dove XN è un tipo o una Type Union.
    In breve, una Type Union è l'unione di N tipi (con N > 0), che a loro volta possono essere
    tipi semplici o Type Union.
    La Type Union corrisponde quindi all'operazione di OR logico, i cui operandi sono tipi.
    La sintassi formale di Type Union è:
        type union X = <operando> <operatore?>
        dove:
            operando: è un tipo o una Type Unione
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
/*

9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3]
11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
12) Qual è la differenza tra type e interface?
13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
17) Crea un oggetto che implementi l'interfaccia Auto.
18) Cosa sono i Generics in TypeScript?
19) È possibile avere più tipi generici in un'interfaccia?
20) Crea un'interfaccia generica per una risposta API.
 *
 */
