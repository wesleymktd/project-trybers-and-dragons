import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super();
    super._lifePoints = 999;
  }
} 

// export default class Dragon extends Monster {
//     private _lifePoints: number;
  
//     constructor() {
//       super();
//       this._lifePoints = 999;
//     }
//   } porque essa implementação não funciona