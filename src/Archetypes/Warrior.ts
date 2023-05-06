import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static _createdArchetypeInstances = 0;
  private _energyType: EnergyType = 'stamina';  
  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Warrior._createdArchetypeInstances;
  }
}