class Poligono{

    constructor(nLados,medidaLado){
        this.numLados = nLados;
        this.medidaLado = medidaLado;
    }

    perimetro(){
        return this.medidaLado*this.nLados; 
    }

    area(){

    }
}

class Triangulo extends Poligono{
    constructor(medidaLado){
        super(3,medidaLado);
       
    }

    area(){

        return (Math.sqrt(3)/4)*Math.pow(this.medidaLado,2);
    }
}

class Cuadrado extends Poligono{
    constructor(medidaLado){
        super(4,medidaLado);
    }

    area(){
        return Math.pow(this.medidaLado,2);
    }
}

class Pentagono extends Poligono{
    constructor(medidaLado,apotema){
        super(5,medidaLado);
        this.apotema = apotema;
    }

    area(){
        return(this.perimetro()*this.apotema)/2;
    }
}

let elTriangulo = new Triangulo(5);
let elCuadrado = new Cuadrado(3);
let elPentagono = new Pentagono(3,3);

console.log(`El área del cuadrado es: ${Cuadrado.area()} y su perímetro es: ${elCuadrado.perimetro()}`);
console.log(`El área del triangulo es: ${elTriangulo.area()} y su perímetro es: ${elTriangulo.perimetro()}`);
console.log(`El área del pentágono es: ${elPentagono.area()} y su perímetro es: ${elPentagono.perimetro()}`);
