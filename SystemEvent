class SystemEvent {
  constructor() {
    this._stack = [];
  }
  bind(cb) {
    var i = this._stack.indexOf(cb);
    // only add unique events
    if (i < 0) {
      this._stack.push(cb);
    }
    return this;
  }
  unbind(cb) {
    var i = this._stack.indexOf(cb);
    if (i >= 0) {
      this._stack.splice(i, 1);
    }
    return this;
  }
  trigger(args, scope) {
    if (!this._stack) {
      return;
    }
    scope = scope || null;
    args = args || [];
    for (var i = 0, l = this._stack.length; i < l; i++) {
      this._stack[i].apply(scope, args);
    }
    return this;
  }
}
export default SystemEvent;
