import * as action from './actions';
import WorkerThread from './Timer.Worker';
import { createRequest, isObject } from './utils';

let freeId = 0;
const timers = {};

function tick(id, options, ...args) {
    if (!options.diff) {
        args.shift()
    }
    return typeof timers[id] === 'function' && timers[id](...args);
}

function setNewTimer(Worker, type, callback, delay, ...args) {
    const timerId = freeId++;
    timers[timerId] = callback;
    Worker.postMessage(
      createRequest(type, timerId, {
          delay,
          args
      }));
    return timerId;
}

function clearTimer(Worker, type, id) {
    delete timers[id];
    Worker.postMessage(
      createRequest(type, id));
}

export class WorkerTimer {
    _Worker;

    constructor(options) {
        this.options = {
            diff: true
        };
        this._Worker = new WorkerThread();
        this._Worker.onerror = this._onError.bind(this);
        this._Worker.onmessage = this._onMessage.bind(this);
        this.init();
    }

    init() {
        this._Worker.postMessage(
          createRequest(action.ACTION_INIT, null, {
              options: this.options
          })
        );
    }

    setTimeout(callback, delay, ...args) {
        return setNewTimer(
          this._Worker, action.ACTION_SETTIMEOUT,
          callback, delay, ...args);
    }

    setInterval(callback, delay, ...args) {
        return setNewTimer(
          this._Worker, action.ACTION_SETINTERVAL,
          callback, delay, ...args);
    }

    setTrustyInterval(callback, delay, ...args) {
        return setNewTimer(
          this._Worker, action.ACTION_SETTRUSTYINTERVAL,
          callback, delay, ...args);
    }

    clearTimeout(id) {
        clearTimer(this._Worker,
          action.ACTION_CLEARTIMEOUT, id);
    }

    clearInterval(id) {
        clearTimer(this._Worker,
          action.ACTION_CLEARINTERVAL, id);
    }

    clearTrustyInterval(id) {
        clearTimer(this._Worker,
          action.ACTION_CLEARTRUSTYINTERVAL, id);
    }

    _onError(e) {
        console.error('worker error', e);
    }

    _onMessage(event) {
        const message = event.data;
        if (!message || message.action == null || !isObject(message.data)) {
            return;
        }
        const { id, args } = message.data;
        switch (message.action) {
            case action.ACTION_TICK:
                tick(id, this.options, ...args);
                break;
            default:
                break;
        }
    }
}

