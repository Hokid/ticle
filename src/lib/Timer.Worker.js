// @flow
import { SimpleTimer } from './SimpleTimer';
import { createResponse, isObject } from './utils';
import * as action from './actions';

let Timer;
let inited = false;
const timers = {};

function callbackCreator(action, id) {
    return function (...args) {
        self.postMessage(
          createResponse(action, id, { args }));
    };
}

function setTimeoutTick(id, delay, ...args) {
    timers[id] = Timer.setTimeout(
      callbackCreator(action.ACTION_TICK, id), delay, ...args);
}

function setIntervalTick(id, delay, ...args) {
    timers[id] = Timer.setInterval(
      callbackCreator(action.ACTION_TICK, id), delay, ...args);
}

function setTrustyIntervalTick(id, delay, ...args) {

    timers[id] = Timer.setTrustyInterval(
      callbackCreator(action.ACTION_TICK, id), delay, ...args);
}

function clearTimeoutTick(id) {
    Timer.clearTimeout(timers[id]);
    delete timers[id];
}

function clearIntervalTick(id) {
    Timer.clearInterval(timers[id]);
    delete timers[id];
}

function clearTrustyIntervalTick(id) {
    Timer.clearTrustyInterval(timers[id]);
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
            setTimeoutTick(id, delay, ...args);
            break;
        case action.ACTION_SETINTERVAL:
            setIntervalTick(id, delay, ...args);
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
            setTrustyIntervalTick(id, delay, ...args);
            break;
        case action.ACTION_INIT:
            if (!inited) {
                Timer = new SimpleTimer(options);
            }
            break;
        default:
            break;
    }
};
