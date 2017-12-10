import { Proxy } from './Proxy';

export class SimpleTimer {
    constructor(options) {
        this.options = options;
        this.Proxy = new Proxy();
    }

    setTimeout(callback, delay, ...args) {
        return this.Proxy.proxyTimer(
            setTimeout, callback, delay, ...args)(this.options);
    }

    setInterval(callback, delay, ...args) {
        return this.Proxy.proxyTimer(
            setInterval, callback, delay, ...args)(this.options);
    }

    setTrustyInterval(callback, delay, ...args) {
        return this.Proxy.proxyTimerWithLooping(
            setTimeout, callback, delay, ...args)(this.options);
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
