// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
}


// Eventos
document.addEventListener('DOMContentLoaded', () => { // Se ejecuta una vez el HTML este listo.
    // Muestra los automiviles.
    mostrarAutos(autos);

    // Llena las opciones de años.
    llenarSelect();
});


// EventListener para los select de busqueda
marca.addEventListener('change', e => {
    // console.log(e.target.value);
    datosBusqueda.marca = e.target.value;
    // console.log(datosBusqueda);

    filtrarAuto();
});

year.addEventListener('change', e => {
    // console.log(e.target.value);
    datosBusqueda.year = parseInt(e.target.value); // Casi todos los datos obtenidos de un formulario seran STRING, para evitar errores, realizamos cambio a Entero, de esta manera nuestro filtro funcionará sin problema.
    // console.log(datosBusqueda);

    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    // console.log(datosBusqueda);
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    // console.log(datosBusqueda);
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    // console.log(datosBusqueda);
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    // console.log(datosBusqueda);
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    // console.log(datosBusqueda);
});


// Funcion para mostrar los autos en el HTML
function mostrarAutos(autos) {
    
    limpiarHTML(); // Elimina el HTML Previo

    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - Puertas ${puertas} - Transmision ${transmision} - Precio ${precio} - Color ${color}        
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}


// Limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}


// Funcion para generar los aos del select
function llenarSelect() {
    for( let i = max; i >= min; i-- ) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año al select
    }
}

// Función que filtra en base a la busqueda.
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear); // A esto se le conoce como "Funciones de Alto Nivel", que son funciones que tienen como párametro otra función. // Filter se puede encadenar para filtrar por varios valores

    mostrarAutos(resultado);
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if (marca) {
        return auto.marca === marca; // Obtienes el auto de la marca que seleccionaste.
    }

    return auto; // Si el usuario no ha seleccionado nada, se devuelven todos los autos.
}

function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if (year) {
        return auto.year === year;
    }

    return auto;
}