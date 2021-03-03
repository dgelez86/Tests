// class Horno {
//     constructor(horaInicio, horaFin) {
//         this.horaInicio = horaInicio
//         this.horaFin = horaFin
//     }
//     tiempoPasado() {
//         let current = {
//             horas: new Tiempo(23, 23).horas - this.horaInicio.horas,
//             minutos: new Tiempo(23, 23).minutos - this.horaInicio.minutos
//         }
//         return TiempoAString(current)
//     }
//     tiempoRestante() {
//         let current = {
//             horas: this.horaFin.horas - new Tiempo(23, 23).horas,
//             minutos: this.horaFin.minutos - new Tiempo(23, 23).minutos
//         }
//         return TiempoAString(current)
//     }
// }
 
// class Tiempo {
//     constructor(horas, minutos) {
//         this.horas = horas;
//         this.minutos = minutos;
//     }
// }

// let TiempoAString = (tiempo) => {
//     console.log(tiempo);
//     return (`${tiempo.horas} ${tiempo.horas === 1 ? "hora" : "horas"} ${tiempo.minutos} ${tiempo.minutos === 1 ? " minuto" : " minutos"}`);
// }

// horno = new Horno(new Tiempo(23, 00), new Tiempo(23, 30))

// console.log(horno.tiempoPasado(), horno.tiempoRestante())

