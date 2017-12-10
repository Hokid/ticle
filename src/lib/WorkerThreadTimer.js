import { WorkerTimer } from './WorkerTimer';
import { SimpleTimer } from './SimpleTimer';
import { isObject } from './utils';

let TimerCtor;

export class WorkerThreadTimer {
    Timer;
    constructor(options) {
        if (!isObject(options)) {
            options = {};
        }

        if (TimerCtor === undefined) {
            TimerCtor = WorkerThreadTimer.isPlatformSupportWorker() ?
                WorkerTimer :
                    SimpleTimer;
        }

        this.Timer = new TimerCtor(options);
    }

    static isPlatformSupportWorker() {
        return typeof window !== 'undefined' && 'Worker' in window;
    }

    setTimeout(callback, delay, ...args) {
        return this.Timer.setTimeout(callback, delay, ...args);
    }

    setInterval(callback, delay, ...args) {
        return this.Timer.setInterval(callback, delay, ...args);
    }

    setTrustyInterval(callback, delay, ...args) {
        return this.Timer.setTrustyInterval(callback, delay, ...args);
    }

    clearTimeout(id) {
        return this.Timer.clearTimeout(id);
    }

    clearInterval(id) {
        return this.Timer.clearInterval(id);
    }

    clearTrustyInterval(id) {
        return this.Timer.clearTrustyInterval(id);
    }
}
