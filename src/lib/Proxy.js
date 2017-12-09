import { isObject } from './utils';


let freeId = 0;
const idsBinding = {};
const internalCallbacks = {};
const dates = {};


function start(id) {
    dates[id] = Date.now();
}

function end(id) {
    const now = Date.now();
    const last = dates[id];
    dates[id] = now;
    return now - last;
}

export class Proxy {
    recordDiff;

    constructor(options) {
        if (!isObject(options)) {
            options = {};
        }
        this.recordDiff = !!options.recordDiff || false;
    }

    proxyTimer(timerMethod, callback, delay, ...args) {
        const id = freeId++;

        if (this.recordDiff) {
            start(id);
        }

        const iCb = internalCallbacks[id] = () => {
            if (this.recordDiff) {
                return callback(end(id), ...args);
            }
            return callback(...args);
        };

        idsBinding[id] = timerMethod(iCb, delay);
        return id;
    }

    proxyClear(clearMethod, id) {
        const tId = idsBinding[id];
        if (tId !== undefined) {
            clearMethod(tId);
            delete idsBinding[id];
            delete internalCallbacks[id];
        }
    }

    proxyTimerWithLooping(timerMethod, callback, delay, ...argsA) {
        const id = this.proxyTimer(
          timerMethod, function(...argsB) {
              idsBinding[id] = timerMethod(internalCallbacks[id], delay);
              callback(...argsB);
          },
          delay, ...argsA);
        return id;
    }
}
