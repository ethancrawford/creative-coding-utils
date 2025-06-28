class NumberUtils {
  constructor(p) {
    this.p = p;
  }

  initInRange(number, randMin, randMax){
    return number || this.p.random(randMin, randMax);
  }
}

export { NumberUtils };
