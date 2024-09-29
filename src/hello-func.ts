 
 export function helloWorld(): string {
  return "Hello, World!";
}

/*
export function helloYou(name:string): string{
    return `hello, ${name!}` ;
};
import type { Human } from "./types";
export function helloHuman (human:Human): string{
    const currentYear = new Date().getFullYear();
    const age = currentYear - human.birthyear;
    return `Hello,${human.firstname} ${human.lastname}!! You are ${age} years old`

};

export function repeatHelloYou(n: number, name: string): string {
    let result = "";
    for (let i = 0; i < n; i++) {
      result += helloYou(name) + "\n";
    }
    return result;
  }
    */

export function helloYou(name: string): string {
    if (!name) {
      return "Error: Name cannot be empty.";
    }
    return `Hello, ${name}!`;
  }
  import type { Human } from "./types";
  
  export function helloHuman(human: Human): string {
    const currentYear = new Date().getFullYear();
    const age = currentYear - human.birthyear;
  
    if (!human.firstname) return "Error: Firstname cannot be empty.";
    return `Hello, ${human.firstname} ${human.lastname}! You are ${age} years old.`;
  }
  
  export function repeatHelloYou(n: number, name: string): string {
    if (n <= 0) {
      return "Error: n must be a positive number.";
    }
    if (!name) {
      return "Error: Name cannot be empty.";
    }
    let result = "";
    for (let i = 0; i < n; i++) {
      result += helloYou(name) + "\n";
    }
    return result;
  }
  
  