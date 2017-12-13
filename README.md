# Ticle

A small library that extends the capabilities of the standard ` setTimeout ` and ` setInterval `.

# Capabilities

 * Setting timers in web worker thread. Some browsers lower the priority of timers, when switching to another tab or minimizing the window, this produce execution delay more than expected. For timers working in a separate thread, there is no such problem.
 
 * Counting the time difference between set timer and trigger callback
 
# Install
 ```
   $ npm install ticle
 ```
 or
 ```
   <script src="https://unpkg.com/ticle@latest/build/ticle.js">
 ```
# How to use

Timers in worker thread
```
  import Ticle from 'ticle';
  
  const WorkerTimer = new Ticle.WorkerTimer({ recordDiff: true });
  
  WorkerTimer.setTrustyInterval(
      (diff, arg1) => console.log(diff, arg1),
      1000, 'arg1');
  
  // 1001, arg1
  // ...
```
Standard
```
  import Ticle from 'ticle';
  
  const WorkerTimer = new Ticle.SimpleTimer({ recordDiff: true });
  
  WorkerTimer.setInterval(
      (diff, arg1) => console.log(diff, arg1),
      1000, arg1');
```

Some examples stored in ` examples/ `.

# Timers constructors

* ` WorkerTimer(options) `
* ` SimpleTimer(options) `

# Methods

* **setTimeout(func: Function, delay: number [, ...args])** - similar to ` setTimeout `, ` ...args ` - any number of arguments provided to ` func `.

* **setInterval(func: Function, delay: number [, ...args])** - similar to `setInterval`.

* **setTrustyInterval(func: Function, delay: number [, ...args])** - similar to ` setInterval `, realisation base on ` setTimeout `.

* **clearTimeout(id: number)** - similar to ` learTimeout `.

* **clearInterval(id: number)** - similar to ` clearInterval `.

* **clearTrustyInterval(id: number)** - similar to ` clearTimeout `, but for ` setTrustyInterval `.

# Options

* **recordDiff: boolean** - whether to record time difference between set timer and trigger callback. The result is passed as the 1st argument to the callback.
