class Bounce {
  constructor() {
    this._stack = {};
  }
  add(id, callback, time) {
    this.clear(id);
    return this.create(id, callback, time);
  }
  create(id, callback, time) {
    this._stack[id] = setTimeout(() => {
      callback();
      this.delete(id);
    }, time || 0);
    return this._stack[id];
  }
  clear(id) {
    if (!this._stack[id]) {
      return;
    }
    clearTimeout(this._stack[id]);
    this.delete(id);
  }
  delete(id) {
    if (this._stack[id]) {
      delete this._stack[id];
    }
  }
}
const bounce = new Bounce();
export default bounce;
