let STALINGRADO = {
    titulo: "STALINGRADO",
    autor: "Antony Beevor",
    añoDePublicación: 2015,
    Generos: ["Historia universal"],

    escribirFichaBibliografica: function(){
        console.log(`${this.titulo} escrito por ${this.autor} en el año ${this.añoDePublicación}, de género ${this.Generos[0]}.`);
    }
}

let Granja = {
    titulo: "Rebelión en la granja",
    autor: "George Orwell",
    añoDePublicación: 1945,
    Generos: ["Novela, satira, fabula, ficcion distopica"],

    escribirFichaBibliografica: function(){
        console.log(`${this.titulo} escrito por ${this.autor} en el año ${this.añoDePublicación}, de género ${this.Generos[0]}.`);
    }
}

let BERLIN = {
    titulo: "BERLIN",
    autor: "Antony Beevor",
    añoDePublicación: 2015,
    Generos: ["Historia universal"],

    escribirFichaBibliografica: function(){
        console.log(`${this.titulo} escrito por ${this.autor} en el año ${this.añoDePublicación}, de género ${this.Generos[0]}.`);
    }
}

let datosPersonales = {
    nombre : "Edgar",
   edad: 20,
   soyEstudiante:true,
   pasatiempos:["Practicar artes marciales","Surfear","Dormir","Leer libros de historias"],

   contacto: {
        email: "edgarpinto010203@gmail.com",
        movil: "5562013401"
   },

   librosFavoritos:[STALINGRADO,Granja,BERLIN],
};

console.log(datosPersonales);
STALINGRADO.escribirFichaBibliografica();
Granja.escribirFichaBibliografica();
BERLIN.escribirFichaBibliografica();