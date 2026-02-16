/**
1) Quali sono i tipi primitivi principali in TypeScript?

    string, number, boolean, undefined, any

    Da notare: number racchiude sia intero che float.

2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
*/

// domanda: identificatore "name" già occupato
let myName: string = "Giuseppe"

let age: number = 29

let isStudyingTypescript: boolean = true

/**
 * 
 * 

3) Tipizza il parametro della seguente funzione:
const greet = (name) => { return "Ciao " + name }

*/

const greet = (name: string) => {
  return "Ciao " + name
}

/*

4) Specifica il tipo di ritorno della seguente funzione:
const sum = (a: number, b: number) => { return a + b }

*/

const sum = (a: number, b: number): number => {
  return a + b
}

/*

5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.{

*/

const addIva = (num: number, ivaPercentage: number): number => {
  // iva on a scale 0 to 1
  const ivaScaled = ivaPercentage / 100
  // the calculated iva: 72 * 0.22
  const ivaNum = num * ivaScaled
  // the original number + calculated iva: example: 72 + (72 * 0.22)
  const finalNum = num + ivaNum
  return finalNum
}

/*

6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

*/

const concatenateStrings = (s1: string, s2: string): number => {
  return s1.length + s2.length
}

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

let numberOrElse: number | null | undefined = null
numberOrElse = 23
numberOrElse = undefined

/*

9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

*/

type Weekday = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"

/*


10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3]
*/

// const numbers: number[] = [1, 2, 3]
const numbers: Array<number> = [1, 2, 3]

/*


11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

*/

const myTuple: [string, string, string, number, number] = ["giuseppe", "hello", "car", 234, 3]

/*

12) Qual è la differenza tra type e interface?

    Un'interface può essere estesa, un Type no.
    L'operazione possibile con i types e l'unione, cioè l'OR logico.
    L'operazione possibile con le interfacce è l'estensione; 
    ad esempio, partendo da interfaccia X, estendere interfaccia Y 
    significa che quest'ultima è un superset di X.

    type X: Y OR Z
        significa: il tipo X è Y, Z o l'intersezione tra Y e Z

       Y    Y AND Z    Z
    ----------------------
    |     |         |    |
    |     |         |    |
    ----------------------

    interface Y extends X
        significa: interfaccia Y ha tutto quello che X, più quello che Y specifica (superset)
    
      X = Y AND X      Y
    -----------------------
    |               |     |
    |               |     |
    -----------------------

*/

/*

13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

*/

interface Person {
  firstname: string
  lastname: string
  age: number
}

/*

14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

*/

interface User {
  email: string
  phone?: string
}

/*

15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

*/

interface Studente {
  nome: string
  voto: number
}

const studente1: Studente = {
  nome: "Giuseppe",
  voto: 100,
}

const studente2: Studente = {
  nome: "Maria",
  voto: 100,
}

// const studenti: Studente[] = [studente1, studente2]
// domanda: la sintassi Array<Studente> fa uso di un generics?
const studenti: Array<Studente> = [studente1, studente2]

/*

16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

*/

interface Veicolo {
  modello: string
  colore: string
  numeroRuote: number
  annoRilascio: number
}

interface Auto extends Veicolo {}

/*

17) Crea un oggetto che implementi l'interfaccia Auto.

*/

const auto1: Auto = {
  modello: "Fiat",
  colore: "bianco",
  numeroRuote: 4,
  annoRilascio: 1947,
}

/*

18) Cosa sono i Generics in TypeScript?

    I Generics sono parametri delle interfacce. 
    Nello specifico, sono parametri di tipo.
    Servono a rendere le interfacce più flessibili.
    In questo modo, si può definire che il parametro di tipo A 
    dell'interfaccia X viene assegnato alla proprietà prop1,
    lasciando così che il tipo di prop1 venga valutato 
    solo al momento dell'invocazione/utilizzo dell'interfaccia.
    
    Esempio (definizione): 

        interface X<A> {
            prop1: A
        }

    Esempio (invocazione/utilizzo): 

        const x: X<string> = {
            prop1: "hello"
        }

*/

/*

19) È possibile avere più tipi generici in un'interfaccia?

    Sì, l'interfaccia accetta dei parametri, e questi parametri 
    vanno a definire il tipo per le proprietà dell'interfaccia
    per le quali si desidera rendere il tipo dinamico, o meglio,
    definito all'utilizzo dell'interfaccia.


20) Crea un'interfaccia generica per una risposta API.  

*/


interface MyJsonDataObj {
    id: string 
    name: string 
    label: string 
    price: number 
}

interface MyJsonData {
    success: boolean 
    errors: string[]
    // domanda: come dire: almeno uno tra item e items deve esistere?
    item?: MyJsonDataObj
    items?: MyJsonDataObj[]
}


// domanda: typescript esiste solo a compilation time, ma a runtime non esiste.
// quindi qualsiasi dato che non esiste già nel source code, typescript 
// non lo può validare. ad esempio validare se il json di un'API si adegua 
// ad uno schema/interfaccia typescript. quindi typescript non serve 
// per tutto quello che è asincrono o qualsiasi dato che esiste in memoria 
// dopo la compilazione. typescript può validare solo i dati che sono in memoria ADESSO
// nel sorgente, PRIMA della compilazione
interface ApiResponse {
  response: Response
  json: JSON
  data: MyJsonData
}


/*

 * 
 */
