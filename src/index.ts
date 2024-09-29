//console.log("Hello world!");
//importation de la function hello world depuis le fichier hello-func
//import {helloHuman, helloworld} from "./hello-func";
//creation d'une constante pour appeller la function helloworld
//const message =helloworld();
//affichage de la constante
//console.log(message);
//Etape 4
//import { helloYou } from "./hello-func";
 // const Message =helloYou("john");
  //console.log(Message);
   import type {Human} from "./types";  
   import { helloHuman, helloYou } from "./hello-func";
   const johnDoe :Human ={
    firstname: "John",
    lastname: "Doe",
    birthyear: 1980,
   };
 const messages = helloHuman(johnDoe);
console.log(messages);
import { repeatHelloYou } from "./hello-func";

const repeatedMessage = repeatHelloYou(5, "John");
console.log(repeatedMessage);
try {
    const message = helloYou("");
    console.log(message);
  } catch (error) {
    console.error(error);
  }
  
