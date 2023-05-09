import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(private player1: Fighter, private player2: SimpleFighter[]) {
    super(player1);
  }

  fight() {
    for (let index = 1; index < 70; index += 1) {
      this.player2.forEach((play2) => {
        this.player1.attack(play2);
        play2.attack(this.player1);  
        if (this.player1.lifePoints === -1 || play2.lifePoints === -1) {
          index = 71;
        }
      });
    }
    return super.fight();
  }
}