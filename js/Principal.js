/*
240703-0923-G) Tst Project IDX
Se tienen N sobres con dinero, cada uno con billetes del mismo valor. 
De cada sobre se conoce el valor del billete y la cantidad. Se requiere
 determinar el total de dinero: a. en cada sobre, b. entre todos los sobres.
El cliente entrega el siguiente formato para la presentación de la salida:
El sobre Nº1 tiene $50
El sobre Nº2 tiene $40
El sobre Nº3 tiene $400
El sobre Nº4 tiene $150

El total entre todos los sobres es de $640
Se procesaron para este ejemplo 4 sobres: a) 5 billetes de $10, b) 2 de $20, c) 4 de $100 y d) 3 de $50*/

import Cl_Sobre from "./Cl_Sobre.js";
import Cl_Todosobre from "./Cl_Todosobre.js";

//instaciar al objeto Sobre
let sobre1=new Cl_Sobre(1,10,5);
let sobre2=new Cl_Sobre(2,20,2);
let sobre3=new Cl_Sobre(3,100,4);
let sobre4=new Cl_Sobre(4,50,3);

let todosobre=new Cl_Todosobre();
todosobre.procesarsobre(sobre1);
todosobre.procesarsobre(sobre2);
todosobre.procesarsobre(sobre3);
todosobre.procesarsobre(sobre4);

//salida solicitada
let salida=document.getElementById("Salida");
salida.innerHTML= "Resultados"
salida.innerHTML+= "<br> Monto del sobre 1 " +sobre1.calculartotaldinero();
salida.innerHTML+= "<br> Monto del sobre 2 " +sobre2.calculartotaldinero();
salida.innerHTML+= "<br>Monto del sobre 3 " +sobre3.calculartotaldinero();
salida.innerHTML+= "<br>Monto del sobre 4 " +sobre4.calculartotaldinero();
salida.innerHTML+= "<br> <br>";
salida.innerHTML+= "<br>Total de dinero entre todo los sobres " +todosobre.devolveracummonto();



