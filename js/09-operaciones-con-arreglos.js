// Operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array
// tecnologias.push('GraphQL') // Añade al final del array
// tecnologias.unshift('GraphQL') // Añade al comienzo del array

// const nuevoArreglo = [...tecnologias, 'GraphQL']
// const nuevoArreglo = ['GraphQL', ...tecnologias]

// Eliminar elementos del array
// tecnologias.pop() // Elimina del final
// tecnologias.shift() // Elimina del inicio
// tecnologias.splice(2, 3) // Elimina de una posición en especifica

// OBTIENE TODOS LOS QUE SON IGUALES A REACT
// const nuevoArray = tecnologias.filter( item => item === 'React' );

// Reemplazar del array
// tecnologias[0] = 'GraphQL'

const nuevoArray = tecnologias.map(item => {
    if(item === 'HTML') {
        return 'GraphQL'
    } else {
        return item
    }
})

console.table(tecnologias)
console.table(nuevoArray)