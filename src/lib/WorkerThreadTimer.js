import { WorkerTimer } from './WorkerTimer';
import { SimpleTimer } from './SimpleTimer';
import { isObject } from './utils';

let Timer;

export class WorkerThreadTimer {
    constructor(options) {
        if (!isObject(options)) {
            options = {};
        }
        if (Timer === undefined) {
            Timer = WorkerThreadTimer.isPlatformSupportWorker() ?
                        new WorkerTimer(options) :
                            new SimpleTimer(options);
        }
    }

    static isPlatformSupportWorker() {
        return typeof window !== 'undefined' && 'Worker' in window;
    }

    setTimeout(callback, delay, ...args) {
        return Timer.setTimeout(callback, delay, ...args);
    }

    setInterval(callback, delay, ...args) {
        return Timer.setInterval(callback, delay, ...args);
    }

    setTrustyInterval(callback, delay, ...args) {
        return Timer.setTrustyInterval(callback, delay, ...args);
    }

    clearTimeout(id) {
        return Timer.clearTimeout(id);
    }

    clearInterval(id) {
        return Timer.clearInterval(id);
    }

    clearTrustyInterval(id) {
        return Timer.clearTrustyInterval(id);
    }
}
