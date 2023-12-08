const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  //comentario de prueba
});

const registros = [];

function leerNumero() {
  return new Promise((resolve) => {
    rl.question('Ingrese un número: ', (entrada) => {
      resolve(Number(entrada));
    });
  });
}

function leerCadena() {
  return new Promise((resolve) => {
    rl.question('Ingrese una cadena: ', (entrada) => {
      resolve(entrada);
    });
  });
}

function crearRegistro() {
  (async () => {
    let id = await leerNumero();
    let nombre = await leerCadena();
    let edad = await leerNumero();

    let registro = {
      id: id,
      nombre: nombre,
      edad: edad,
    };

    registros.push(registro);
    console.log('Registro creado con éxito.');
    printMenu();
    performOperation();
  })();
}

function leerRegistro() {
  (async () => {
    let id = await leerNumero();
    let registro = registros.find((r) => r.id === id);

    if (registro) {
      console.log('Registro encontrado:', registro);
    } else {
      console.log('Registro no encontrado.');
    }

    printMenu();
    performOperation();
  })();
}

function actualizarRegistro() {
  (async () => {
    let id = await leerNumero();
    let nombre = await leerCadena();
    let edad = await leerNumero();

    let registro = registros.find((r) => r.id === id);

    if (registro) {
      registro.nombre = nombre;
      registro.edad = edad;
      console.log('Registro actualizado con éxito:', registro);
    } else {
      console.log('Registro no encontrado.');
    }

    printMenu();
    performOperation();
  })();
}

function eliminarRegistro() {
  (async () => {
    let id = await leerNumero();

    let registro = registros.find((r) => r.id === id);

    if (registro) {
      registros.splice(registros.indexOf(registro), 1);
      console.log('Registro eliminado con éxito:', registro);
    } else {
      console.log('Registro no encontrado.');
    }

    printMenu();
    performOperation();
  })();
}

function printMenu() {
  console.log('\nMenú de opciones');
  console.log('1. Crear registro');
  console.log('2. Leer registro');
  console.log('3. Actualizar registro');
  console.log('4. Eliminar registro');
}

function performOperation() {
  rl.question('Seleccione una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        crearRegistro();
        break;
      case '2':
        leerRegistro();
        break;
      case '3':
        actualizarRegistro();
        break;
      case '4':
        eliminarRegistro();
        break;
      default:
        rl.close();
    }
  });
}

// Inicia el programa mostrando el menú
printMenu();
performOperation();