export function Factorial()
{
    let 
    n = prompt
    ('Ingrese un numero:','');

    parseInt(n, 10)
    
    let resultado=1;
    
    for(let i = n;i>=1;i--){

        resultado *= i;
        
    }

    return resultado;
}