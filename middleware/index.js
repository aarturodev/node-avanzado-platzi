const runMiddlewares = (req, res, middlewares) => {
  let index = 0;
  const next= () => {
    if(index < middlewares.length) {
      const middleware = middlewares[index++];
      middleware(req, res, next);
    }
  }
  next();
}

const middleware1 = (req, res, next) => {
  console.log('Middleware 1 executed');
  next();
}
const middleware2 = (req, res, next) => {
  console.log('Middleware 2 executed');
  next();
}
const middleware3 = (req, res, next) => {
  console.log('Middleware 3 executed');
  if(req.data === '/api/data') {
    console.log('Data found, skipping Middleware 4');
    next();
  }
  else{
    console.log('data not found, stopping execution');
  }
}

const middleware4 = (req, res, next) => {
  console.log('Middleware 4 executed');
  next();
}

const req = {data: '/api/datas'};
const res = {};

runMiddlewares(req, res, [middleware1, middleware2, middleware3, middleware4]);

