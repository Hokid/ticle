import { Proxy } from './Proxy';
import { isObject } from './utils';


export class SimpleTimer {
    constructor(options) {
        if (!isObject(options)) {
            options = {};
        }

        this.Proxy = new Proxy({
            recordDiff: options.diff
        });
    }

    setTimeout(callback, delay, ...args) {
        return this.Proxy.proxyTimer(
          setTimeout, callback, delay, ...args);
    }

    setInterval(callback, delay, ...args) {
        return this.Proxy.proxyTimer(
          setInterval, callback, delay, ...args);
    }

    setTrustyInterval(callback, delay, ...args) {
        return this.Proxy.proxyTimerWithLooping(
          setTimeout, callback, delay, ...args);
    }

    clearTimeout(id) {
        return this.Proxy.proxyClear(clearTimeout, id);
    }

    clearInterval(id) {
        return this.Proxy.proxyClear(clearInterval, id);
    }

    clearTrustyInterval(id) {
        return this.Proxy.proxyClear(clearTimeout, id);
    }
}
