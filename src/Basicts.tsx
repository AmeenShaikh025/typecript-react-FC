import React from 'react';

let name:string = "ameen"
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]; // Tuple

//ex:
role = [2, "Ameen"]

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

let person: Object; // not reomended

type Person1 = {
  name: string;
  age?: number;  // ? - for optional property in TS
}

let person1: Person1 = {
  name: "ameens",
  age: 12
}

let people: Person1[];

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// TS - Union 

let age1: number | string;
age1 = 12;
age1 = "Twelve";

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// TS - Functions 

// declaring funtion type 
// i. 
let printName1: Function 


// ii.
let printName2: (name: string) => void;

function printName(name: string) {
  console.log(name)
}

printName("AMeens")

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// instead of "any" you can use a "unkown" type 

let personName: unknown; // Recomended 


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// "never"

// void returns "undefined" but "never" doesn't return anything. 
// if you don't know if it is going to return anythin or not use "never" 
//ex: 

let printName3: (name:string) => never;

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


// ALIAS (types and interfaces)

// type is an alias

// defining person using interface

interface PersonInterface {
  name: string;
  age?: number;
}

// diff b/w types and interface

type X = {
  a: string;
  b: number;
}

// type Y = {
//   c: string;
//   d: number
// }

/* If you want to use type x in type Y then.... */

type Y = X & {
  c: string;
  d: number
}

let y: Y = {
  c: "asd",
  d: 3,
  a: 'sd',
  b: 2
}

//  how to extend in interface
// ex:

interface Guy extends PersonInterface {
  profession: string;
}

let g: Guy = {
  name: 'asd',
  age: 12,
  profession: "Dr"
}


/* PersonInterface wants to extend type X1 */

type X1 =  PersonInterface & {
  a: string;
  b: number;
}

/* type X2 wants to extend PersonInterface1 */

interface PersonInterface1 extends X {
  name: string;
  age?: number;
}


function Basicts() {
  return (
    <div className="basictsx">
      <p>Basic TSX</p>
    </div>
  );
}

export default Basicts;
