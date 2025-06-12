class Clock {
  constructor({ start = 0, finish = 1, delta = 0.01 } = {}) {
    this._start = start;
    this._finish = finish;
    this._delta = delta;
    this._time = start;
  }

  get start() {
    return this._start;
  }

  set start(t) {
    this._start = t;
  }

  get finish() {
    return this._finish;
  }

  set finish(t) {
    this._finish = t;
  }

  get delta() {
    return this._delta;
  }

  set delta(t) {
    this._delta = t;
  }

  get time() {
    return this._time;
  }

  set time(t) {
    this._time = t;
  }

  get timeLeft() {
    return 1 - this.time;
  }

  get finished() {
    return this._time >= this._finish;
  }

  get unfinished() {
    return !this.finished;
  }

  get totalDeltas() {
    return this.finish / this.delta;
  }

  get elapsedDeltas() {
    return this.time * this.totalDeltas;
  }

  tick() {
    this.time += this.delta;
  }
}
export { Clock };
