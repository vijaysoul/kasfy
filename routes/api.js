import {action, get} from "../config/routes";

export default class ApiController {

   constructor() {
      this.msg = 'bar';
   }
 
   @get('/')
   index(req, res) {
      res.json( {msg: this.msg} );
   }
}


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
Author : S.Katheeskumar [https://katheesh.github.io]*/ 