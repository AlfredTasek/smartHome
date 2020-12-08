const util = require('./util/util.js');
let count = 0;

exports.update = () => {
  return new Promise(async function (resolve, reject) {
    try {
      console.log('Update #' + count + '.'); count++;
      const data = await util.readFile('./data/data.json');
      const json = JSON.parse(data);

      for (device in json) {
        if (device.includes('temperature')) {
          console.log(device + json[device].val);
        }
      }

      await util.sleep(1000);
    } catch (e) { reject(e); }
    resolve();
  });
}
