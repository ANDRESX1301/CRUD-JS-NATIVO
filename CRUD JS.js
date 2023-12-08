const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = [];

function printMenu() {
  console.log('**************************************');
  console.log('Bienvenido al programa CRUD en memoria.');
  console.log('1. Crear');
  console.log('2. Leer');
  console.log('3. Actualizar');
  console.log('4. Eliminar');
  console.log('5. Salir');
  console.log('**************************************');
}

function create() {
  rl.question('Ingrese el nuevo elemento: ', (answer) => {
    data.push(answer);
    console.log('Elemento creado con éxito.');
    printMenu();
    performOperation();
  });
}

function read() {
  console.log('Elementos almacenados:');
  data.forEach((element, index) => {
    console.log(`${index + 1}. ${element}`);
  });
  printMenu();
  performOperation();
}

function update() {
  rl.question('Ingrese el índice del elemento que desea actualizar: ', (index) => {
    index = parseInt(index, 10) - 1;
    if (index >= 0 && index < data.length) {
      rl.question('Ingrese el nuevo valor: ', (newValue) => {
        data[index] = newValue;
        console.log('Elemento actualizado con éxito.');
        printMenu();
        performOperation();
      });
    } else {
      console.log('Índice inválido.');
      printMenu();
      performOperation();
    }
  });
}

function remove() {
  rl.question('Ingrese el índice del elemento que desea eliminar: ', (index) => {
    index = parseInt(index, 10) - 1;
    if (index >= 0 && index < data.length) {
      data.splice(index, 1);
      console.log('Elemento eliminado con éxito.');
      printMenu();
      performOperation();
    } else {
      console.log('Índice inválido.');
      printMenu();
      performOperation();
    }
  });
}

function performOperation() {
  rl.question('Seleccione una opción: ', (choice) => {
    switch (choice) {
      case '1':
        create();
        break;
      case '2':
        read();
        break;
      case '3':
        update();
        break;
      case '4':
        remove();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción no válida. Inténtelo de nuevo.');
        printMenu();
        performOperation();
    }
  });
}
printMenu();
performOperation();
