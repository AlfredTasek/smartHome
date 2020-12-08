const updater = require('./updater.js');

start();

async function start() {
  try {
    while (true) {
      try {
        await updater.update();

      } catch (e) { console.log(e); }
    }
    resolve();
  } catch (e) { return reject(e); }
}
