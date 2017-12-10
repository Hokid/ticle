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
    proxyTimer(timerMethod, callback, delay, ...args) {
        return function(options) {
            const id = freeId++;

            if (!isObject(options)) {
                options = {};
            }

            options.recordDiff = Boolean(options.recordDiff);

            if (options.recordDiff) {
                start(id);
            }

            const iCb = internalCallbacks[id] = () => {
                if (options.recordDiff) {
                    return callback(end(id), ...args);
                }
                return callback(...args);
            };

            idsBinding[id] = timerMethod(iCb, delay);
            return id;
        };
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
        return (options) => {
            const id = this.proxyTimer(
                timerMethod, function(...argsB) {
                    idsBinding[id] = timerMethod(internalCallbacks[id], delay);
                    callback(...argsB);
                },
                delay, ...argsA)(options);
            return id;
        };
    }
}
