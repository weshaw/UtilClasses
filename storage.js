class Storage {
  constructor() {
    this.setEngine(sessionStorage);
  }
  setEngine(engine) {
    if (!engine || !engine.setItem || !engine.getItem) {
      return false;
    }
    this.engine = engine;
    return true;
  }
  get(key) {
    let value = this.engine.getItem(key);
    try {
      value = JSON.parse(value);
    } catch (e) {}
    return value;
  }
  set(key, value) {
    try {
      value = JSON.stringify(value);
    } catch (e) {}
    this.engine.setItem(key, value);
    return true;
  }
  remove(key) {
    this.engine.removeItem(key);
    return false;
  }
}
const storage = new Storage();
export default storage;
