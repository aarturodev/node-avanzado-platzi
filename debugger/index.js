function operacionCompleja(){
  debugger;
  console.time('operacioCompleja')
  console.log("Operación compleja iniciada");

  for(let i=0; i<10000;i++){
    Math.sqrt(i)
  }
  console.timeEnd('operacioCompleja')
  console.trace("Fin de operacion compleja")
}

function operacionA(){
  operacionCompleja();
}

function procesoB(){
  operacionA();
}

procesoB();