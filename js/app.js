// Variables
const resultado = document.querySelector('#resultado');

// Eventoos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
});


// Funciones
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