/* The NodeJS Framework for Smart Back-End
 .----------------.  .----------------.  .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
| |  ___  ____   | || |      __      | || |    _______   | || |  _________   | || |  ____  ____  | |
| | |_  ||_  _|  | || |     /  \     | || |   /  ___  |  | || | |_   ___  |  | || | |_  _||_  _| | |
| |   | |_/ /    | || |    / /\ \    | || |  |  (__ \_|  | || |   | |_  \_|  | || |   \ \  / /   | |
| |   |  __'.    | || |   / ____ \   | || |   '.___`-.   | || |   |  _|      | || |    \ \/ /    | |
| |  _| |  \ \_  | || | _/ /    \ \_ | || |  |`\____) |  | || |  _| |_       | || |    _|  |_    | |
| | |____||____| | || ||____|  |____|| || |  |_______.'  | || | |_____|      | || |   |______|   | |
| |              | || |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'  '----------------' 
Author : S.Katheeskumar [https://katheesh.github.io] */ 


import express from "express";

export function action(method, path) {
   return (target, name, descriptor) => {
      let routes = target._routes || (target._routes = []);
      routes.push( {method, path, fn: descriptor.value} );
   }
}

export let get = path => action('get', path);
export let post = path => action('post', path);
export let put = path => action('put', path);

export function routes(ctrl) {
   let instance = new ctrl();

   let router = express.Router();
   instance._routes.forEach( r => router[r.method](r.path, r.fn.bind(instance)));
   return router;
}
