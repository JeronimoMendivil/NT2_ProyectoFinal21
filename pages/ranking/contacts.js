/**
 * Estructura de datos 
 * 
 * {
 *      nombre,
 *      telefono,
 *      etc
 * }
 */

const CANTIDAD_DATOS = 20;

const nombres = ['Santiago', 'Isabel', 'Ana','Jhon', 'Facundo', 'Jeronimo']
const apellidos = ['Altamura', 'Getti', 'Bustamante', 'Baggieri', 'Carrenio']

// Para que lo mejoren en el MDN Mozilla!!
const random = (max, min = 0) => Math.floor(Math.random() * (max - min + 1 )) + min;

// devuelve un nombre aleatorio `Jhon Altamura`
const generarNombre = () => `${nombres[random(nombres.length - 1)]} ${apellidos[random(apellidos.length - 1)]}`

// esto devuelve un numero tipo 555-555-555
const generarTelefono = () => `${random(999,100)}-${random(999,100)}-${random(999,100)}`

const crearContacto = () => {
    return {
        nombre: generarNombre(),
        telefono: generarTelefono(),

    }
}

const contacts = Array.from({
    length: CANTIDAD_DATOS
}, crearContacto).map((item, id) => ({ ...item, id }))

export default contacts
