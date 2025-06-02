const tarea1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 1 completada");
      resolve("Resultado de la tarea 1");
    }, 2000);
  });
}

const tarea2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 2 completada");
      resolve("Resultado de la tarea 2");
    }, 1000);
  });
}

const tarea3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 3 completada");
      resolve("Resultado de la tarea 3");
    }, 500);
  });
}

Promise.all([tarea1(), tarea2(), tarea3()])
  .then((resultados) => {
    console.log("Todas las tareas completadas:");
    console.log(resultados);
  })
  .catch((error) => {
    console.error("Error en alguna de las tareas:", error);
  });