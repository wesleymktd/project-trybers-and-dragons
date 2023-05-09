import { PVE, PVP } from './Battle';
import Battle from './Battle/Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('power rangers');
const player2 = new Character('jaspion');
const player3 = new Character('thunder Cats');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battlesArray: Battle[]) {
  battlesArray.forEach((battle) => {
    battle.fight();
  });
}

export { 
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles, 
};
