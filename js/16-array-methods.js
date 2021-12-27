const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const numeros = [10, 20, 30];

// Filter
nuevoArray = tecnologias.filter( item => item !== 'React');
console.log(nuevoArray);

// Comprobar si un elemento existe en el array
// const resultado = tecnologias.includes('GraphQL')

// const resultado = tecnologias.includes('React');
// console.log(resultado);

// regresa el nombre si existe sino regresa undefined
// const resultado2 = tecnologias.find(item => item === 'React');
// console.log(resultado2);

// Some - Devuelve si al menos uno cumple la condición
// const resultado = numeros.some( numero => numero > 15)

// Find - Devuelve el primer elemento que cumpla la condicion
// const resultado = numeros.find( numero => numero > 5)

// Every - Retorna true o false si todos cumplen la condición
// const resultado = numeros.every( numero => numero > 9);
// const resultado = numeros.every( numero => numero > 10); // false porque no cumple toda las condiciones
// console.log(resultado);

// Reduce - Acumulando en el total
// const resultado = numeros.reduce( (total, numero) => numero + total, 0)
// console.log(resultado);

// Filter - Crea un nuevo array en base a una condición
// const resultado = tecnologias.filter( item => item === 'Node.js')
// console.log(resultado);
// const resultado = numeros.filter( numero => numero !== 10)

// tecnologias.forEach( (item, index) => console.log(index))

// Crear un nuevo array
// const arrayMap = tecnologias.map( item => item)

// console.log(arrayMap)