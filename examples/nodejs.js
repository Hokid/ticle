var Ticle = require('../build/ticle');
var timer = new Ticle.WorkerTimer({
    recordDiff: true
});
timer.setTimeout((diff) => console.log('work', 'diff', diff), 1000);
