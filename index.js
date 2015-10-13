const huggare = require('huggare'),
      ConsoleTransport = require('huggare-transport-console');

const instance = new huggare.Logger(huggare.Severities.INFO);

instance.addTransport(ConsoleTransport);

module.exports = instance;
