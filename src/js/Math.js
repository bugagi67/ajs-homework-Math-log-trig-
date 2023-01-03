export default class MathChar {
  constructor(name, attack, stoned, distance) {
    this.name = name;
    this.attack = attack;
    this.stoned = stoned;
    this.distance = distance;
  }

  get stoned() {
    return this.realyStoned;
  }

  set stoned(stoned) {
    this.realyStoned = stoned;
  }

  set attack(attack) {
    this.attackVal = attack;
  }

  get attack() {
    let executableAttack = this.attackVal * (1 - (this.distance - 1) / 10);

    if (this.stoned) {
      executableAttack -= Math.log2(this.distance) * 5;
    }
    return executableAttack;
  }
}
