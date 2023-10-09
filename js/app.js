// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;


// Eventoos
document.addEventListener('DOMContentLoaded', () => { // Se ejecuta una vez el HTML este listo.
    // Muestra los automiviles.
    mostrarAutos();

    // Llena las opciones de años.
    llenarSelect();
});


// Funcion para mostrar los autos en el HTML
function mostrarAutos() {
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

// Funcion para generar los aos del select
function llenarSelect() {
    for( let i = max; i >= min; i-- ) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año al select
    }
}