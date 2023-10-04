import { elCuadrado, elTriangulo, elPentagono } from "./Modules/PoligonosRegulares.js"; 
import { Reloj } from "./Modules/RelojDigital.js"; 
import { Factorial } from "./Modules/Factorial.js";  
console.log(`El área del triangulo es: ${elTriangulo.area()} y su perímetro es: ${elTriangulo.perimetro()}`);
console.log(`El área del cuadrado es: ${elCuadrado.area()} y su perímetro es: ${elCuadrado.perimetro()}`);
console.log(`El área del pentágono es: ${elPentagono.area()} y su perímetro es: ${elPentagono.perimetro()}`);
console.log(Reloj());
console.log(Factorial());