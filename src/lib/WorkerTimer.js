import * as action from './actions';
import WorkerThread from './Timer.Worker';
import { createRequest, isObject } from './utils';

let freeId = 0;
let Worker;
const timers = {};

function tick(id, ...args) {
    return typeof timers[id] === 'function' && timers[id](...args);
}

function initWorker() {
    if (Worker === undefined) {
        Worker = new WorkerThread();
        Worker.onerror = onError;
        Worker.onmessage = onMessage;
        Worker.postMessage(
            createRequest(action.ACTION_INIT)
        );
    }
}

function onError(e) {
    console.error('Timer worker error: ', e);
}

function onMessage(event) {
    const message = event.data;
    if (!message || message.action == null || !isObject(message.data)) {
        return;
    }
    const { id, args } = message.data;
    switch (message.action) {
        case action.ACTION_TICK:
            tick(id, ...args);
            break;
        default:
            break;
    }
}

function setNewTimer(type, callback, delay, ...args) {
    return function(options) {
        const timerId = freeId++;
        timers[timerId] = callback;
        Worker.postMessage(
            createRequest(type, timerId, {
                delay,
                options,
                args
            }));
        return timerId;
    };
}

function clearTimer(type, id) {
    delete timers[id];
    Worker.postMessage(
        createRequest(type, id));
}

export class WorkerTimer {
    constructor(options) {
        this.options = options;
        initWorker();
    }

    setTimeout(callback, delay, ...args) {
        return setNewTimer(
            action.ACTION_SETTIMEOUT,
            callback, delay, ...args)(this.options);
    }

    setInterval(callback, delay, ...args) {
        return setNewTimer(
            action.ACTION_SETINTERVAL,
            callback, delay, ...args)(this.options);
    }

    setTrustyInterval(callback, delay, ...args) {
        return setNewTimer(
            action.ACTION_SETTRUSTYINTERVAL,
            callback, delay, ...args)(this.options);
    }

    clearTimeout(id) {
        clearTimer(
            action.ACTION_CLEARTIMEOUT, id);
    }

    clearInterval(id) {
        clearTimer(
            action.ACTION_CLEARINTERVAL, id);
    }

    clearTrustyInterval(id) {
        clearTimer(
            action.ACTION_CLEARTRUSTYINTERVAL, id);
    }
}

