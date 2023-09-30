function factorial(){
    n=prompt('Ingrese un numero:','');
    parseInt(n, 10)
    //et num=9;
    let resultado=1;
    for(let i = n;i>=1;i--){
        resultado *= i;
    }

    return resultado;
}

console.log(factorial());