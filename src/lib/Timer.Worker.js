// @flow
import { Proxy } from './Proxy';
import { createResponse, isObject } from './utils';
import * as action from './actions';

let TimerProxy;
let inited = false;
const timers = {};

function callbackCreator(action, id) {
    return function (...args) {
        self.postMessage(
            createResponse(action, id, { args }));
    };
}

function setTimeoutTick(id, delay, options, args) {
    timers[id] = TimerProxy.proxyTimer(setTimeout,
        callbackCreator(action.ACTION_TICK, id), delay, ...args)(options);
}

function setIntervalTick(id, delay, options, args) {
    timers[id] = TimerProxy.proxyTimer(setInterval,
        callbackCreator(action.ACTION_TICK, id), delay, ...args)(options);
}

function setTrustyIntervalTick(id, delay, options, args) {
    timers[id] = TimerProxy.proxyTimerWithLooping(setTimeout,
        callbackCreator(action.ACTION_TICK, id), delay, ...args)(options);
}

function clearTimeoutTick(id) {
    TimerProxy.proxyClear(clearTimeout , timers[id]);
    delete timers[id];
}

function clearIntervalTick(id) {
    TimerProxy.proxyClear(clearInterval , timers[id]);
    delete timers[id];
}

function clearTrustyIntervalTick(id) {
    TimerProxy.proxyClear(clearTimeout , timers[id]);
    delete timers[id];
}

self.onmessage = (event) => {
    const message = event.data;

    if (!message || message.action == null || !isObject(message.data)) {
        return;
    }
    const { id, delay, args, options } = message.data;
    switch (message.action) {
        case action.ACTION_SETTIMEOUT:
            setTimeoutTick(id, delay, options, args);
            break;
        case action.ACTION_SETINTERVAL:
            setIntervalTick(id, delay, options, args);
            break;
        case action.ACTION_CLEARTIMEOUT:
            clearTimeoutTick(id);
            break;
        case action.ACTION_CLEARINTERVAL:
            clearIntervalTick(id);
            break;
        case action.ACTION_CLEARTRUSTYINTERVAL:
            clearTrustyIntervalTick(id);
            break;
        case action.ACTION_SETTRUSTYINTERVAL:
            setTrustyIntervalTick(id, delay, options, args);
            break;
        case action.ACTION_INIT:
            if (!inited) {
                inited = true;
                TimerProxy = new Proxy();
            }
            break;
        default:
            break;
    }
};
