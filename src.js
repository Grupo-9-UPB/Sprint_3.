const calcularPocentajes = async(limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {

    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/limits");
    let limits = await response.json();

    /*let porcentajeCO = 0; // este es el valor del porcentaje
    if (limiteCO == 0) {
        porcentajeCO = 0;
    } else {
        if (limiteCO > 0) {
            porcentajeCO = (100 * valorCO) / limiteCO;
        }
    }*/

    let porcentajeCO = limits.limiteCO ? (valorCO * 100) / limits.limiteCO : 0;
    let porcentajeCO2 = limits.limiteCO2 ? (valorCO2 * 100) / limits.limiteCO2 : 0;
    let porcentajeHC = limits.limiteHC ? (valorHC * 100) / limits.limiteHC : 0;
    let porcentajeO2 = limits.limiteO2 ? (valorO2 * 100) / limits.limiteO2 : 0;

    /*let porcentajeCO2 = 0; // este es el valor del porcentaje
    if (limiteCO2 == 0) {
        porcentajeCO2 = 0;
    } else {
        if (limiteCO > 0) {
            porcentajeCO2 = (100 * valorCO2) / limiteCO2;
        }
    }
    let porcentajeHC = 0; // este es el valor del porcentaje
    if (limiteHC == 0) {
        porcentajeHC = 0;
    } else {
        if (limiteHC > 0) {
            porcentajeHC = (100 * valorHC) / limiteHC;
        }
    }
    let porcentajeO2 = 0; // este es el valor del porcentaje
    if (limiteO2 == 0) {
        porcentajeO2 = 0;
    } else {
        if (limiteO2 > 0) {
            porcentajeO2 = (100 * valorO2) / limiteO2;
        }
    }*/

    return { porcentajeCO, porcentajeCO2, porcentajeHC, porcentajeO2 };
}


global.rangosCO = [
    { etiqueta: 'Parametro CO en rango estandar', de: 0, hasta: 10 },
    { etiqueta: 'Parametro CO fuera de rango', de: 11, hasta: 15 },
]
global.rangosCO2 = [
    { etiqueta: 'Parametro CO2 en rango estandar', de: 0, hasta: 20 },
    { etiqueta: 'Parametro CO2 fuera de rango', de: 21, hasta: 30 },
]
global.rangosHC = [
    { etiqueta: 'Parametro HC en rango estandar', de: 0, hasta: 10000 },
    { etiqueta: 'Parametro HC fuera de rango', de: 10001, hasta: 11000 },
]
global.rangosO2 = [
    { etiqueta: 'Parametro O2 en rango estandar', de: 0, hasta: 22 },
    { etiqueta: 'Parametro O2 fuera de rango', de: 23, hasta: 30 },
]

const registrarCO = async(value) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangosCO = await response.json();
    let candidate = rangosCO[0]

    if (value >= global.rangosCO[0].de && value <= global.rangosCO[0].hasta) {
        return global.rangosCO[0].etiqueta;
    }
    if (value >= global.rangosCO[1].de && value <= global.rangosCO[1].hasta) {
        return global.rangosCO[1].etiqueta;
    }
    if (value < global.rangosCO[0].de) {
        return "fuera_de_rango";
    }
    if (value > global.rangosCO[1].hasta) {
        return "fuera_de_rango";
    }
}


const registrarCO2 = async(value) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangosCO2 = await response.json();
    let candidate = rangosCO2[0]

    if (value >= global.rangosCO2[0].de && value <= global.rangosCO2[0].hasta) {
        return global.rangosCO2[0].etiqueta;
    }
    if (value >= global.rangosCO2[1].de && value <= global.rangosCO2[1].hasta) {
        return global.rangosCO2[1].etiqueta;
    }
    if (value < global.rangosCO2[0].de) {
        return "fuera_de_rango";
    }
    if (value > global.rangosCO2[1].hasta) {
        return "fuera_de_rango";
    }
}


const registrarHC = async(value) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangosHC = await response.json();
    let candidate = rangosHC[0]

    if (value >= global.rangosHC[0].de && value <= global.rangosHC[0].hasta) {
        return global.rangosHC[0].etiqueta;
    }
    if (value >= global.rangosHC[1].de && value <= global.rangosHC[1].hasta) {
        return global.rangosHC[1].etiqueta;
    }
    if (value < global.rangosHC[0].de) {
        return "fuera_de_rango";
    }
    if (value > global.rangosHC[1].hasta) {
        return "fuera_de_rango";
    }

}


const registrarO2 = async(value) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangosO2 = await response.json();
    let candidate = rangosO2[0]

    if (value >= global.rangosO2[0].de && value <= global.rangosO2[0].hasta) {
        return global.rangosO2[0].etiqueta;
    }
    if (value >= global.rangosO2[1].de && value <= global.rangosO2[1].hasta) {
        return global.rangosO2[1].etiqueta;
    }
    if (value < global.rangosO2[0].de) {
        return "fuera_de_rango";
    }
    if (value > global.rangosO2[1].hasta) {
        return "fuera_de_rango";
    }

}

module.exports.registrarCO = registrarCO;

module.exports.registrarCO2 = registrarCO2;

module.exports.registrarHC = registrarHC;


module.exports.registrarO2 = registrarO2;
module.exports.calcularPocentajes = calcularPocentajes;

//return {"porcentajeCO":porcentajeCO+"%","porcentajeCO2":porcentajeCO2+"%", "porcentajeHC":porcentajeHC+"%", "porcentajeO2":porcentajeO2+"%"};