function Reloj(){
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    let segundosTexto;
    let minutosTexto;
    let horasTexto;

    let isPm = horas%12 >0;

    let meridiano = isPm ? "pm":"am";

    if(segundos<10){
         segundosTexto= `0${segundos}`;
    }else{
        segundosTexto = segundos;
    }

    if(minutos<10){
        minutosTexto =`0${minutos}`;
    } else {
        minutosTexto = minutos;
    }

    if(horas==12){
        horasTexto = 12;
    }
    else if(horas!=12){
        if(horas%12<10){
            horasTexto = `0${horas%12}`;
        } else{
            horasTexto = horas%12;
        }
    }

    return `${horasTexto}:${minutosTexto}:${segundosTexto} ${meridiano}`;
}

setInterval(function() {console.log(Reloj());},1000)